/* 
========================================================================================

    script.js
    Archivo principal para el juego de 100 Senditos dijeron.
    Hecho por Alberto Leyva
    Sendas Caminos al Señor 
    Ultima modificación: 19/10/22

========================================================================================
 */

// Funcion para leer un archivo .txt

/*
......................................
    Formato del archivo que se le pasa

        Pregunta
        Respuesta 1
        Respuesta 2
        Respuesta 3
        Respuesta 4
        Respuesta 5
......................................
*/

var active = false;

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
    
    // Funcion para recorrer el archivo y separarlo por \n
    reader.onload = function() {
        var lines = this.result.split('\n');
        document.getElementById("pregunta").innerHTML = lines[0];
        active = true;
        for (var line = 1; line < lines.length; line++) {
            var res = "res" + line.toString();
            document.getElementById(res).innerHTML = lines[line];
        }
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
    
}

var equis = 0;
var puntos = 0;

// Evento para acciones del teclado
document.addEventListener('keypress', (event) => {
    if (event.defaultPrevented) {
        return;
    }

    if (active) {
    // Condicionales para activar las respuestas con los numeros (1,2,3,4,5)

        if (event.code === "Digit1"){
            puntos = puntos + 27;
            document.getElementById("res1").style.fontSize = "60px";
            document.getElementById("puntaje").innerHTML = puntos.toString();
        } 
        
        else if (event.code === "Digit2"){
            puntos = puntos + 22;
            document.getElementById("res2").style.fontSize = "60px";
            document.getElementById("puntaje").innerHTML = puntos.toString();
        } 
        
        else if (event.code === "Digit3"){
            puntos = puntos + 20;
            document.getElementById("res3").style.fontSize = "60px";
            document.getElementById("puntaje").innerHTML = puntos.toString();
        } 
        
        else if (event.code === "Digit4"){
            puntos = puntos + 17;
            document.getElementById("res4").style.fontSize = "60px";
            document.getElementById("puntaje").innerHTML = puntos.toString();
        } 
        
        else if (event.code === "Digit5"){
            puntos = puntos + 14;
            document.getElementById("res5").style.fontSize = "60px";
            document.getElementById("puntaje").innerHTML = puntos.toString();
        }

        // Condicionales para aparecer una equis cuando se aprieta la tecla X

        if (event.code === "KeyX"){

            if (equis == 0){
                document.getElementById("mala1").width = "230";
                window.setTimeout(() => {
                    document.getElementById("mala1").width = "0";
                }, 3000);
                equis = 1;
            }

            else if (equis == 1){
                document.getElementById("mala1").width = "230";
                document.getElementById("mala2").width = "230";
                window.setTimeout(() => {
                    document.getElementById("mala1").width = "0";
                    document.getElementById("mala2").width = "0";
                }, 3000);
                equis = 2;
            }

            else if (equis == 2){
                document.getElementById("mala1").width = "230";
                document.getElementById("mala2").width = "230";
                document.getElementById("mala3").width = "230";
                window.setTimeout(() => {
                    document.getElementById("mala1").width = "0";
                    document.getElementById("mala2").width = "0";
                    document.getElementById("mala3").width = "0";
                }, 3000);
                equis = 3;
            }
        }
    }
    event.preventDefault();

}, false);

