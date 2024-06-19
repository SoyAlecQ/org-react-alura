import Colaborador from "../Colaborador/Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

  const { colorPrimario, colorSecundario, titulo } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColorEquipo } = props

  const background = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }

  const border = {
    borderColor: colorPrimario
  }

  return <>
    {
      colaboradores.length > 0 &&
      <section className="equipo" style={background}>
        <input type="color" className="input-color" value={colorPrimario} onChange={(evento) => actualizarColorEquipo(evento.target.value, titulo)} />
        <h3 style={border}>{titulo}</h3>
        <div className="colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} />)
          }
        </div>
      </section>
    }
  </>
}

export default Equipo