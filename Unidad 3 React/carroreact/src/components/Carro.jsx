import CartProduct from "./CartProduct"

export default function Carro ({carroVisible , fToggleCarro, Productos}) {

    const carroStyle = {
        carro : {width : carroVisible ? "100%" : "0%"},
        productContainer : {
            display : carroVisible ? 'block' : 'none',
            overflowY : 'scroll'
        }
    }

    return <div className="carroCompras" style={carroStyle.carro}>
        <button onClick={ () => { fToggleCarro () }}
                className="btn btn-outline-success"><i className="bi bi-x-lg"></i></button>
        
            <div style={carroStyle.productContainer}>
                <p className="card-title text-center">Tu Carrito</p>

            {Productos.map(P => <CartProduct producto={P} />)}
            </div>
    </div>

}