export default function CartProduct ({producto}) {
    return <div className="cartProduct">
        <div>
            <img width={100} src={producto.UrlImagen} className="img-thumbnail"></img>
        </div>
        <div>
            <p>{producto.Descripcion}</p>
            <p>Cantidad : 1</p>
            <p>Valor Unitario: {producto.Precio}</p>
        </div>
    </div>

}