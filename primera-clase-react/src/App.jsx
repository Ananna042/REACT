
import './App.css'
import { Users } from "./components/Users";
//siempre q el import sea 'nombrado' van llaves
import Employees from "./components/Employees";
//si el import no es nombrado o x default va sin llaves
function App() {//el componente es una funcion q devuelve contenido renderizablecd cc NO DA LOGICA
  //EL COMPONENTE SIEMPRE ARRANCA CON mayuscula

  //npm install para instalar
  //npmrun dev para correr el programa


  return (
    <>
    <Users name ="ananan"/>
      hola mundooooooooo
      <Employees />

    </>
  );
}

export default App
