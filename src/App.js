import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import { useState } from 'react';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  
  const [colaboradores, actualizarColaboradores] = useState([{
    nombre: "Byron Montenegro",
    puesto: "Estudiante en Alura Latam",
    foto: "https://github.com/soyalecq.png",
    equipo: "Programación"
  },
  {
    nombre: "Byron Montenegro",
    puesto: "Estudiante en Alura Latam",
    foto: "https://github.com/soyalecq.png",
    equipo: "Front End"
  }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = () => {
    console.log("Eliminar colaborador")
  }

  return (
    <div>
      <Header />

      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} />)
      }

      <Footer />
    </div>
  );
}

export default App;
