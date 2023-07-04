export default function CardProducto ( { producto, fAddToCart } ) {

    const toCLP = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })

    return  <div className="card m-2 p-2" style={{width: "18rem"}}>
                <img src={producto.UrlImagen} width={100} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{producto.Descripcion}</h5>
                    <p className="card-text">{toCLP.format(producto.Precio)}</p>
                    <button onClick={ ()=>{ fAddToCart(producto) }} className="btn btn-primary">Add</button>
                </div>
            </div>


}