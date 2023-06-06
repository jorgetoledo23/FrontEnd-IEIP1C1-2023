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

const toCLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})

let TOTAL = 0

const Total = document.createElement('strong')
Total.innerText = toCLP.format(TOTAL)
Total.id = 'total'
Total.classList.add('mx-3')
btnOpenCart.appendChild(Total)


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
    {
        "Cod": "4",
        "Descripcion": "Microsoft Xbox Series S",
        "Precio": 345678,
        "UrlImagen": "https://media.solotodo.com/media/products/1263786_picture_1604618116.jpg"
    },


]




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
    btnAdd.classList.add('btn', 'btn-danger')
    
    //1er Nivel de Dificultad 
    //Aparezca el Producto Agregado en el ProductContainer
    btnAdd.addEventListener('click', ()=>{

        productAdded()


        TOTAL = TOTAL + num.Precio
        const total = document.getElementById('total')
        total.innerText = toCLP.format(TOTAL)

        //2do Nivel de Dificultad
        //Eliminar Producto del Carro

        //3er Nivel de Difucltad
        //Aumentar cantidad y evitar duplicidad


        const exists = document.getElementById(num.Cod)
        if(exists){
            //Aumentar Cantidad Y Precio
            exists.innerText = parseInt(exists.innerText) + 1
            const divPadre = exists.parentNode.parentNode
            const precio = divPadre.childNodes[3]
            let subTotal = parseInt(num.Precio) * parseInt(exists.innerText)
            precio.innerText = toCLP.format(subTotal)
            
        }else{
            const divCarro = document.createElement('div') // Contenedor del producto
        const imgCarro = document.createElement('img') // Imagen del producto
        const descCarro = document.createElement('p') // Descripcion
        const precioCarro = document.createElement('p') // Precio
        const btnCarro = document.createElement('a') //btn Eliminar
        const textoCantidad = document.createElement('p') // Cantidad
        const cantidad = document.createElement('span')

        divCarro.classList.add('card', 'text-center', 'p-1', 'm-2')
        descCarro.classList.add("card-title")
        descCarro.innerText = num.Descripcion

        imgCarro.src = num.UrlImagen
        imgCarro.classList.add('d-block', 'm-3', 'mx-auto')
        imgCarro.style.width = "50px"
        imgCarro.style.minHeight = "50px"
        imgCarro.style.maxHeight = "50px"

        precioCarro.innerText = toCLP.format(num.Precio)

        textoCantidad.innerText = "Cantidad: "
        cantidad.innerText = 1
        cantidad.id = num.Cod
        textoCantidad.appendChild(cantidad)

        btnCarro.classList.add('btn', 'btnEliminarFromCart')
        btnCarro.innerHTML = '<i class="fa-solid fa-trash">'
        btnCarro.addEventListener('click', ()=>{
            
            const cantidad = document.getElementById(num.Cod)
            TOTAL = TOTAL - (num.Precio * parseInt(cantidad.innerText))
            const total = document.getElementById('total')
            total.innerText = toCLP.format(TOTAL)
            productContainer.removeChild(divCarro)
        })

        

        


        divCarro.appendChild(descCarro)
        divCarro.appendChild(imgCarro)
        divCarro.appendChild(textoCantidad)
        divCarro.appendChild(precioCarro)
        
        divCarro.appendChild(btnCarro)

        productContainer.appendChild(divCarro)
        
        }



        






    })




    div.appendChild(desc)
    div.appendChild(img)
    div.appendChild(precio)
    div.appendChild(btnAdd)
    root.appendChild(div)

})


function productAdded(){
    const divAdded = document.getElementById('product-added')
    divAdded.style.display = 'block'
}