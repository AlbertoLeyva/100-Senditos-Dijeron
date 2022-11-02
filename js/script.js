/* 
========================================================================================

    script.js
    Archivo principal para el juego de 100 Senditos dijeron.
    Hecho por Alberto Leyva
    Sendas Caminos al Señor 
    Ultima modificación: 21/10/22

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
        intro.play();
        //document.getElementById("pregunta").innerHTML = lines[0];
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
var seg = 2000;

var equipo = 1;

var uno = true;
var dos = true;
var tres = true;
var cuatro = true;
var cinco = true;

var intro = new Audio('assets/sounds/Inicio.wav');
var error = new Audio('assets/sounds/Error.wav');
var acierto = new Audio('assets/sounds/Respuesta_Correcta.wav');
var ganador = new Audio('assets/sounds/Ganador.wav');

function ganar(){
    if (!uno && !dos && !tres && !cuatro && !cinco){
        window.setTimeout(() => {
            ganador.play();
        }, 2000); 
    }
}

// Evento para acciones del teclado
document.addEventListener('keypress', (event) => {
    if (event.defaultPrevented) {
        return;
    }

    if (active) {
    // Condicionales para activar las respuestas con los numeros (1,2,3,4,5)

        if (event.code === "Digit1" && uno){
            if (puntos < 100){puntos = puntos + 27;}
            document.getElementById("res1").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            uno = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit2" && dos){
            if (puntos < 100){puntos = puntos + 22;}
            document.getElementById("res2").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            dos = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit3" && tres){
            if (puntos < 100){puntos = puntos + 20;}
            document.getElementById("res3").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            tres = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit4" && cuatro){
            if (puntos < 100){puntos = puntos + 17;}
            document.getElementById("res4").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            cuatro = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit5" && cinco){
            if (puntos < 100){puntos = puntos + 14;}
            document.getElementById("res5").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            cinco = false;
            this.ganar();
        }

        // Condicionales para aparecer una equis cuando se aprieta la tecla X

        if (event.code === "KeyX"){

            if (equis == 0){
                error.play();
                document.getElementById("mala1").width = "230";
                window.setTimeout(() => {
                    document.getElementById("mala1").width = "0";
                }, seg);
                equis = 1;
            }

            else if (equis == 1){
                error.play();
                document.getElementById("mala1").width = "230";
                document.getElementById("mala2").width = "230";
                window.setTimeout(() => {
                    document.getElementById("mala1").width = "0";
                    document.getElementById("mala2").width = "0";
                }, seg);
                equis = 2;
            }

            else if (equis == 2){
                error.play();
                document.getElementById("mala1").width = "230";
                document.getElementById("mala2").width = "230";
                document.getElementById("mala3").width = "230";
                window.setTimeout(() => {
                    document.getElementById("mala1").width = "0";
                    document.getElementById("mala2").width = "0";
                    document.getElementById("mala3").width = "0";
                }, seg);
                equis = 3;
            }
        }

        // Botones para seleccionar equipo participando
        if (event.code === "KeyE"){
            if (equipo == 2){
                document.getElementsByClassName("puntos-e1")[0].style.borderColor = "purple";
                document.getElementsByClassName("puntos-e2")[0].style.borderColor = "black";
                equipo = 1;
            }
            else if (equipo == 1){
                document.getElementsByClassName("puntos-e1")[0].style.borderColor = "black";
                document.getElementsByClassName("puntos-e2")[0].style.borderColor = "purple";
                equipo = 2;
            }
            
        }
    }
    event.preventDefault();

}, false);