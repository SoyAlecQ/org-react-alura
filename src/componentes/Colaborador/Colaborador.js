import "./Colaborador.css"
import { TiDelete } from "react-icons/ti";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Colaborador = (props) => {

  const { nombre, puesto, foto, id, fav } = props.datos
  const { colorPrimario, eliminarColaborador, like } = props
  return (
    <div className="colaborador">
      <TiDelete className="eliminar" onClick={() => eliminarColaborador(id)} />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? <GoHeartFill color="#FF0000" onClick={() => like(id)} /> : <GoHeart onClick={() => like(id)} />}
      </div>
    </div>
  )
}

export default Colaborador