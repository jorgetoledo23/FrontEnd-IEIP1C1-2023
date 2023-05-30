const btnAbrir = document.getElementById('btn') //HTML Elemtent
const parrafo = document.getElementById('title') // null

let Edad = null
Edad = 20

//Event Listener

btnAbrir.addEventListener('click', () => {
    let nuevoTexto = prompt("Ingresa Nuevo Texto: ")
    parrafo.innerText = nuevoTexto
})

const btnAgregarSubtitulo = document.getElementById('btnAgregarSubtitulo')
btnAgregarSubtitulo.addEventListener('click', () => {

    const subtitulo = document.createElement('h5')
    let texto = prompt('Ingresa el Subtitulo')
    subtitulo.innerHTML = '<strong>'+ texto +'</strong>'
    subtitulo.style.color = "red"
    document.body.appendChild(subtitulo)


})







//Ocultar Parrafo







// btnAbrir.addEventListener('click', () => {
//     cambiarTexto()
// })


// function cambiarTexto(){
//     let nuevoTexto = prompt("Ingresa Nuevo Texto: ")
//     parrafo.innerText = nuevoTexto
// }
// const cambiarTexto2 = () =>{
//     let nuevoTexto = prompt("Ingresa Nuevo Texto: ")
//     parrafo.innerText = nuevoTexto
// }


// function Saludar(nombre){
//     console.log("Hola " + nombre)
// }
// const Saludar2 = (nombre) => {
//     console.log("Hola" + nombre)
// }


// Saludar('Jhon')