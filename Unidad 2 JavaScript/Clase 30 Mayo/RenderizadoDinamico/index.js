
const array = ['https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg', 'https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg', 'https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg']

const products = [
    {
        "Cod" : "1", 
        "Descripcion" : "Nintendo Switch OLED White",
        "Precio" : 199999,
        "UrlImagen" : "https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg"
    },
    {
        "Cod" : "2", 
        "Descripcion" : "PlayStation 5",
        "Precio" : 489999,
        "UrlImagen" : "https://media.solotodo.com/media/products/1182943_picture_1602146793.webp"
    },
    {
        "Cod" : "3", 
        "Descripcion" : "Lenovo IdeaPad Gaming 3 15IMH05",
        "Precio" : 1234564,
        "UrlImagen" : "https://media.solotodo.com/media/products/1228061_picture_1599591333.webp"
    },


]


const root = document.getElementById('root')

products.forEach( num => {

    const div = document.createElement('div') // Contenedor del producto
    const img = document.createElement('img') // Imagen del producto
    const desc = document.createElement('p') // Descripcion
    const precio = document.createElement('p')// Precio
    div.classList.add('card','text-center', 'col-3')

    desc.classList.add("card-title")
    desc.innerText = num.Descripcion

    img.src = num.UrlImagen

    precio.innerText = num.Precio



    div.appendChild(desc)
    div.appendChild(img)
    div.appendChild(precio)
    root.appendChild(div)

})