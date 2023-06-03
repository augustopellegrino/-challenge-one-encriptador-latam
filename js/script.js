const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar() {

    //se llama a la funcion encriptar con el parametro textArea.value, que es el mensaje
    //ingresado en el area de texto.

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function encriptar(stringEncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.table(matrizCodigo);

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        //buscar coincidencias entre stringEncriptado y las letras cargadas en matrizCodigo
        //donde i es la posición del indice y 0, para primera posición del arreglo anidado.

        if (stringEncriptado.includes(matrizCodigo[i][0])) {

            //replaceALL reemplaza todas las letras.
            // primer valor la letra que quiero reemplzar, segundo valor, el valor de reemplazo.

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }

    return stringEncriptado;

}

function btnDesencriptar() {

    //se llama a la funcion encriptar con el parametro textArea.value, que es el mensaje
    //ingresado en el area de texto.

    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}


function desencriptar(stringDesencriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        //idem a la funcion de encriptado, pero en sentido inverso.

        if (stringDesencriptado.includes(matrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }


    }

    return stringDesencriptado;

}


