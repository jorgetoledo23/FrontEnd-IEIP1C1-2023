import { useState } from "react"
import Navbar from "./components/Navbar"
function App() {
  
  const [contador, setContador] = useState(0)
  const [carroVisible, setCarroVisible] = useState(false)
  const [productos, setProductos] = useState([])

  const aumentarContador = () =>{
    setContador((cont) =>  cont + 1)
  }
  const disminuirContador = () =>{
    contador == 0 ? setContador(0) : setContador((cont) => cont - 1)
  }

  const toggleDiv = () =>{
    setCarroVisible(!carroVisible)
  }
  
  return (
    <div className="App">
      <Navbar asd={ toggleDiv } ancho={100} largo={100}/>


      Clase Front End 29 Junio

      <h1>Hooks useState</h1>

      <div><button onClick={ ()=>{ aumentarContador () }  }>+</button></div>
      <h4>Contador : {contador}</h4>
      <div><button onClick={ ()=>{ disminuirContador () }  }>-</button></div>

      <hr/>

      <div>
        <button onClick={ () => { toggleDiv() }}>Toggle Div</button>
      </div>
      <div style={{ display : carroVisible ? 'block' : 'none'  }}>
        <img width={300} height={300} src="https://dotnet.microsoft.com/static/images/refresh/home-hero.png"></img>
      </div>



    </div>
  );
}

export default App;
