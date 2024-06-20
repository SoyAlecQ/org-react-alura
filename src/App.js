import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
import { v4 as uuid } from 'uuid';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Byron Montenegro",
    puesto: "Estudiante en Alura Latam",
    foto: "https://github.com/soyalecq.png",
    equipo: "Programación",
    fav: true
  },
  {
    id: uuid(),
    nombre: "Homero Simpson",
    puesto: "Técnico en Alura Latam",
    foto: "https://i.pinimg.com/736x/19/4f/82/194f820c8284fd0d5752397986e736eb.jpg",
    equipo: "Front End",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Marge Simpson",
    puesto: "Desarrolladora en Alura Latam",
    foto: "https://i.pinimg.com/474x/45/36/01/45360126fbc77881378ad9625034741b.jpg",
    equipo: "Front End",
    fav: true
  },
  {
    id: uuid(),
    nombre: "Bart Simpson",
    puesto: "Investigador en Alura Latam",
    foto: "https://i.pinimg.com/564x/19/b9/64/19b964b6fa755049ae53ed3ce43d0e52.jpg",
    equipo: "Data Science",
    fav: true
  },
  {
    id: uuid(),
    nombre: "Lisa Simpson",
    puesto: "Analista en Alura Latam",
    foto: "https://i.pinimg.com/736x/42/94/d8/4294d8718c284add390ef50e013e6a6b.jpg",
    equipo: "Data Science",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Maggie Simpson",
    puesto: "Soporte en Alura Latam",
    foto: "https://i.pinimg.com/736x/f9/88/94/f98894f995ff1f0c50ef142517f20a31.jpg",
    equipo: "Devops",
    fav: true
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  /* Colaboradores */

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColorEquipo = (color, id) => {
    // console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  /* Equipos */

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }
  
  /* Favorito */

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />

      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo} />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColorEquipo={actualizarColorEquipo} like={like} />)
      }

      <Footer />
    </div>
  );
}

export default App;
