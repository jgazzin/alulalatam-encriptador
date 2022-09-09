const inputTexto = document.querySelector (toLowerCase(".texto-entrada"));
const outputMensaje = document.querySelector ("texto-salida");


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
    var arrayRemplazar = ["a", "e", "i", "o", "u"];
    var arrayRemplazantes = ["imes", "ai", "ober", "ufat"]; 

    let x = "";
    let y = "";

    for (let index = 0; index < arrayRemplazar.length; index++) {
        x = arrayRemplazar [index];
        y = arrayRemplazantes [index];
        outputMensaje = outputMensaje.replace(x, y);

        /* control:
        document.write(x);
        document.write("<br>");
        document.write(y);
        document.write("<br>");
        document.write(outputMensaje);
        document.write("<br>"); */
    }

    return outputMensaje;
}

encriptar.onclick = encriptar;
