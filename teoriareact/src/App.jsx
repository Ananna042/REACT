import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

//el estado tiene 3 ppartes (camel_case, snake_case, )
//variables en camel case
//const[variable, setVariable] = useState("valor incial "); //actualiza el valor de la izquierda
useEffect(()=>{
 fetch('https://rickandmortyapi.com/api/character') //la info es u  json
  .then ((res)=> res.json()) //tanto en fetc como en funciones asincronas //  lo transforma , react no lo procesa y lo pasamos a objeto 
  .then((result)=> console.log(result));
},[])
// es una funcion 2 parametros la cantidad de veces q se va a ejecutar, en caso de q no halla un dependecia [] se renderiza una sola vez

return (
  <>
    {!personajes ? (
      <div>cargando...</div>
    ) : (
      <ul>
        {personajes.map((personaje) => (
          <li>
            <h3>{personaje.name}</h3>
            <img src={personaje.image} alt="" />
          </li>
        ))}
      </ul>
    )}
  </>
);
}

export default App;


