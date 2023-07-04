import { useState } from "react"
import Navbar from "./components/Navbar"
import data from './data.json'
import CardProducto from "./components/CardProducto"
import Carro from "./components/Carro"

function App() {
  
  const [carroVisible, setCarroVisible] = useState(false) //false = carro width 0%, true carro width 100%
  const [cartProducts, setCartProducts] = useState([])

  const toggleCarro = () =>{
    setCarroVisible(!carroVisible)
  }

  const addToCart = (P) =>{
    let copyCart = [...cartProducts]
    copyCart.push(P)
    setCartProducts(copyCart)
  }



  
  return (
    <div className="App">
      <Navbar fToggleCarro={toggleCarro} />
      <Carro Productos={cartProducts} carroVisible={carroVisible} fToggleCarro={toggleCarro} />

      <div className="row justify-content-evenly m-5">
        {data.map(P => <CardProducto fAddToCart={addToCart} producto={P} />)}
      </div>
    </div>
  );
}

export default App;
