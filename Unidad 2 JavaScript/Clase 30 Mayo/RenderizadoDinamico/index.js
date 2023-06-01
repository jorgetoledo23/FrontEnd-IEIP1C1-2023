const btnOpenCart = document.getElementById('openCart')
const carroContainer = document.getElementById('carroContainer')
const productContainer = document.getElementById('productContainer')
btnOpenCart.addEventListener('click', () => {
    if (carroContainer.style.height == "90vh") {
        carroContainer.style.height = "0vh"

    } else {
        carroContainer.style.height = "90vh"
    }
})

carroContainer.addEventListener('transitionstart', () => {
    productContainer.style.display == 'block' ? productContainer.style.display = 'none' : productContainer.style.display = 'block'
})


const array = ['https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg', 'https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg', 'https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg']

const products = [
    {
        "Cod": "1",
        "Descripcion": "Nintendo Switch OLED White",
        "Precio": 199999,
        "UrlImagen": "https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg"
    }, {
        "Cod": "2",
        "Descripcion": "PlayStation 5",
        "Precio": 489999,
        "UrlImagen": "https://media.solotodo.com/media/products/1182943_picture_1602146793.webp"
    }, {
        "Cod": "3",
        "Descripcion": "Lenovo IdeaPad Gaming 3 15IMH05",
        "Precio": 1234564,
        "UrlImagen": "https://media.solotodo.com/media/products/1228061_picture_1599591333.webp"
    },


]

const toCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})


const root = document.getElementById('root')

products.forEach(num => {

    const div = document.createElement('div') // Contenedor del producto
    const img = document.createElement('img') // Imagen del producto
    const desc = document.createElement('p') // Descripcion
    const precio = document.createElement('p') // Precio
    const btnAdd = document.createElement('button') // button add

    div.classList.add('card', 'text-center', 'col-md-3', 'p-5', 'm-2')

    desc.classList.add("card-title")
    desc.innerText = num.Descripcion

    img.src = num.UrlImagen
    img.classList.add('d-block', 'm-3', 'mx-auto')
    img.style.width = "150px"
    img.style.minHeight = "150px"
    img.style.maxHeight = "150px"

    precio.innerText = toCLP.format(num.Precio)

    btnAdd.innerHTML = '<i class="fa-solid fa-cart-plus me-2"></i>Add'
    btnAdd.classList.add('btn', 'btn-outline-danger')
    
    //1er Nivel de Dificultad 
    //Aparezca el Producto Agregado en el ProductContainer
    btnAdd.addEventListener('click', ()=>{
        
    })




    div.appendChild(desc)
    div.appendChild(img)
    div.appendChild(precio)
    div.appendChild(btnAdd)
    root.appendChild(div)

})
