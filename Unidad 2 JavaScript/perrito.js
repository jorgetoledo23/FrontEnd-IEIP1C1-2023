const btn = document.getElementById("btn")
const lc2 = document.getElementById("LC2")

btn.addEventListener("click", () => {
    const nuevoLi = document.createElement("li")
    nuevoLi.innerText = 6
    lc2.appendChild(nuevoLi)
})