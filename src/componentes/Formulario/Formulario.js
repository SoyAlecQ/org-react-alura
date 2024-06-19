import { useState } from "react"
import Boton from "../Boton/Boton"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import "./Formulario.css"

const Formulario = (props) => {

  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const {registrarColaborador} = props

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    let datosAEnviar = { nombre, puesto, foto, equipo }
    registrarColaborador(datosAEnviar)
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
        <ListaOpciones titulo="Puesto" required valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
        <Boton texto="Crear" />
      </form>
    </section>
  )
}

export default Formulario