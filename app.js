
//==========Funcion para encriptar mensaje=========//
function encriptarMensaje() {

    //==========Define valor internamente de solo letras minusculas=========//

    let mensajeUsuario = document.getElementById('textoUsuario').value.toLowerCase();
 
    //==========Se define que debe cambiar en cuestion de las reglas=========//

    var textoUsuario = mensajeUsuario.replace(/e/img,"enter");
    var textoUsuario = textoUsuario.replace(/i/img,"imes");
    var textoUsuario = textoUsuario.replace(/a/img,"ai");
    var textoUsuario = textoUsuario.replace(/o/img,"ober");
    var textoUsuario = textoUsuario.replace(/u/img,"ufat");

    //==========Obtine el valor del resultado del mensaje a partir de lo que escribio el usuario=========//

    document.getElementById('resultadoMensaje').innerHTML = textoUsuario;
    console.log(resultadoMensaje);

//==========Valida el valor del mensaje del usuario=========//

    //==========Si el usuario aun no escribe nada. mostrara visible: signo de interrogación y mensaje de espera=========//

if (textoUsuario == '' ) {
    document.getElementById('int').style.visibility = 'visible';
    document.getElementById('pls').style.visibility = 'visible';
    document.getElementById('ngn').style.visibility = 'visible';
} else {
    //===Si el usuario ya escribio un mensaje ocultara el signo y el mensaje de espera (cuando se clickea uno de los botones)===//

    document.getElementById('int').style.visibility = 'hidden';
    document.getElementById('ningun').style.visibility = 'hidden';
    document.getElementById('pls').style.visibility = 'hidden';
    
}
//==========Una vez que se clickea algun boton limpia la caja para escribir nuevo mensaje=========//

limpiarEspacio();
}

//==========Funcion para desencriptar mensaje=========//

function desencriptarMensaje() {

    //==========Define valor internamente de solo letras minusculas=========//

    let mensajeUsuario = document.getElementById('textoUsuario').value.toLowerCase();
 
    //==========Se define que debe cambiar en cuestion de las reglas=========//

    var textoUsuario = mensajeUsuario.replace(/enter/img,"e");
    var textoUsuario = textoUsuario.replace(/imes/img,"i");
    var textoUsuario = textoUsuario.replace(/ai/img,"a");
    var textoUsuario = textoUsuario.replace(/ober/img,"o");
    var textoUsuario = textoUsuario.replace(/ufat/img,"u");

    //==========Obtine el valor del resultado del mensaje a partir de lo que escribio el usuario=========//

    document.getElementById('resultadoMensaje').innerHTML = textoUsuario;
    console.log(resultadoMensaje);

//==========Si el usuario aun no escribe nada. mostrara visible: signo de interrogación y mensaje de espera=========//
if (textoUsuario == '' ) {
    document.getElementById('int').style.visibility = 'visible';
    document.getElementById('pls').style.visibility = 'visible';
    document.getElementById('ngn').style.visibility = 'visible';
} else {

    //===Si el usuario ya escribio un mensaje ocultara el signo y el mensaje de espera (cuando se clickea uno de los botones)===//

    document.getElementById('int').style.visibility = 'hidden';
    document.getElementById('ningun').style.visibility = 'hidden';
    document.getElementById('pls').style.visibility = 'hidden';
    
}

//==========Una vez que se clickea algun boton limpia la caja para escribir nuevo mensaje=========//
limpiarEspacio();
}


//==========Función para limpiar textarea=========//
function limpiarEspacio() {
    document.getElementById('textoUsuario').value = '';
}

//==========Función copiar mensaje con boton de copiar=========//

function copiarTexto () {
    let contenido = document.getElementById('resultadoMensaje');
    let boton = document.getElementById('copiarBoton');

    navigator.clipboard.writeText(resultadoMensaje.textContent);
    boton.textContent = 'Copiar';
    //==========Estilo de alerta SweetAlerts2=========//
    Swal.fire({
        position: "top-end",
        icon: "info",
        title: "El mensaje fue copiado",
        showConfirmButton: false,
        timer: 1000,
      });


    
}

