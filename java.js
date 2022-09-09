const inputTexto = document.querySelector(".texto-entrada");
const outputMensaje = document.querySelector(".texto-salida");


/* FUNCIONES */

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar (stringAencriptar) {
   
    var arrayRemplazar = ["e", "i", "a", "o", "u"];
    var arrayRemplazantes = ["enter", "imes","ai", "ober", "ufat"]; 
    stringAencriptar = stringAencriptar.toLowerCase();

    let x = "";
    let y = "";

    for (let index = 0; index < arrayRemplazar.length; index++) {
        x = arrayRemplazar [index];
        y = arrayRemplazantes [index];
        stringAencriptar = stringAencriptar.replaceAll(x, y);

    }

    return stringAencriptar;
}

function desencriptar (stringAencriptar) {
   
    var arrayRemplazar = ["a", "e", "i", "o", "u"];
    var arrayRemplazantes = ["ai", "enter","imes", "ober", "ufat"]; 
    stringAencriptar = stringAencriptar.toLowerCase();

    let x = "";
    let y = "";

    for (let index = 0; index < arrayRemplazar.length; index++) {
        x = arrayRemplazar [index];
        y = arrayRemplazantes [index];
        stringAencriptar = stringAencriptar.replaceAll(y, x);

    }

    return stringAencriptar;
}

function botonEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputMensaje.value = textoEncriptado;
    
    /* apagar la imagen de sinMensaje*/
    document.getElementById("salidaMensaje").style.display = "block";
    document.getElementById("sinMensaje").style.display = "none";

    /* limpiar mensaje original */
    inputTexto.value = "";
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputMensaje.value = textoDesencriptado;
    
    /* apagar la imagen de sinMensaje*/
    document.getElementById("salidaMensaje").style.display = "block";
    document.getElementById("sinMensaje").style.display = "none";

    /* limpiar mensaje original */
    inputTexto.value = "";
}


function copiar() {
    outputMensaje.select();
    navigator.clipboard.writeText(outputMensaje.value);
    outputMensaje.value = "";
}
