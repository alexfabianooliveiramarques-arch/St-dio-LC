function whatsapp(){

window.open("https://wa.me/94991382933")

}

function abrir(img){

let modal = document.getElementById("modal")
let grande = document.getElementById("imgGrande")

grande.src = img.src
modal.style.display = "flex"

}

function fechar(){

document.getElementById("modal").style.display = "none"

}