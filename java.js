const inputTexto = document.querySelector (".texto-entrada");
const outputMensaje = document.querySelector ("texto-salida");

const inputTextoMinuscula = inputTexto.toLowerCase();

/* FUNCIONES */
/*
Includes()
toLowerCase()
replaceAll()
navigator.clipboard
Element.style
*/
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar () {
    outputMensaje = inputTextoMinuscula.replaceAll("e", "enter");
    outputMensaje = inputTextoMinuscula.replaceAll("i", "imes");
    
    return outputMensaje;
}

onclick.encriptar = encriptar;
