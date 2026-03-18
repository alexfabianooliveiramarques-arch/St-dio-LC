function whatsapp(){

window.open("https://wa.me/5591999999999")

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

function enviar(event){

event.preventDefault()

alert("Mensagem enviada! O fotógrafo entrará em contato.")

}