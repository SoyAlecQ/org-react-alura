import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import { useState } from 'react';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
