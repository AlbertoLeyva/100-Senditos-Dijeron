/* 
========================================================================================

    script.js
    Archivo principal para el juego de 100 Senditos dijeron.
    Hecho por Alberto Leyva
    Sendas Caminos al Señor 
    Ultima modificación: 01/11/22

========================================================================================
 */

// Funcion para leer un archivo .txt

/*
......................................
    Formato del archivo que se le pasa

        Respuesta 1
        Respuesta 2
        Respuesta 3
        Respuesta 4
        Respuesta 5
......................................
*/

var active = false;
const n = 5;

var equis = 0;
var puntos = 0;
var seg = 2000;

var equipo = 1;
var puntosE1 = 0;
var puntosE2 = 0;

var uno = true;
var dos = true;
var tres = true;
var cuatro = true;
var cinco = true;
var ronda = true;

var intro = new Audio('assets/sounds/Inicio.wav');
var error = new Audio('assets/sounds/Error.wav');
var acierto = new Audio('assets/sounds/Respuesta_Correcta.wav');
var ganador = new Audio('assets/sounds/Ganador.wav');

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
        for (var line = 0; line < lines.length; line++) {
            var l = line + 1;
            var res = "res" + l.toString();
            document.getElementById(res).innerHTML = lines[line];
        }
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
    
}

function ganar(){
    if (!uno && !dos && !tres && !cuatro && !cinco && ronda){
        window.setTimeout(() => {
            ganador.play();
            if (equipo == 1) {
                puntosE1 += puntos
                document.getElementById("puntaje1").innerHTML = puntosE1.toString();
            } else if (equipo == 2) {
                puntosE2 += puntos
                document.getElementById("puntaje2").innerHTML = puntosE2.toString();
            }
        }, seg); 
    }
}

function siguiente(){
    active = false;

    equis = 0;
    puntos = 0;
    document.getElementById("puntaje").innerHTML = puntos.toString();

    equipo = 1;

    uno = true;
    dos = true;
    tres = true;
    cuatro = true;
    cinco = true;
    ronda = true;

    document.getElementsByClassName("puntos-e1")[0].style.borderColor = "purple";
    document.getElementsByClassName("puntos-e2")[0].style.borderColor = "purple";

    for (var i = 1; i < 6; i++){
        document.getElementById("res" + i.toString()).style.fontSize = "0px";
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
            if (puntos < 100 && ronda){puntos = puntos + 27;}
            document.getElementById("res1").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            uno = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit2" && dos){
            if (puntos < 100 && ronda){puntos = puntos + 22;}
            document.getElementById("res2").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            dos = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit3" && tres){
            if (puntos < 100 && ronda){puntos = puntos + 20;}
            document.getElementById("res3").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            tres = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit4" && cuatro){
            if (puntos < 100 && ronda){puntos = puntos + 17;}
            document.getElementById("res4").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            cuatro = false;
            this.ganar();
        } 
        
        else if (event.code === "Digit5" && cinco){
            if (puntos < 100 && ronda){puntos = puntos + 14;}
            document.getElementById("res5").style.fontSize = "2.5vmax";
            document.getElementById("puntaje").innerHTML = puntos.toString();
            acierto.play();
            cinco = false;
            this.ganar();
        }

        // Condicionales para aparecer una equis cuando se aprieta la tecla X

        if (event.code === "KeyX"){

            if(event.shiftKey){
                error.play();
            }
            else {
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
        }

        // Boton para seleccionar equipo participando
        if (event.code === "KeyE"){
            if (equipo == 2){
                document.getElementsByClassName("puntos-e1")[0].style.borderColor = "gold";
                document.getElementsByClassName("puntos-e2")[0].style.borderColor = "black";
                equipo = 1;
            }
            else if (equipo == 1){
                document.getElementsByClassName("puntos-e1")[0].style.borderColor = "black";
                document.getElementsByClassName("puntos-e2")[0].style.borderColor = "gold";
                equipo = 2;
            }
            
        }

        // Usa la G para poppear el equipo ganador desde antes 
        if (event.code === "KeyG"){
            if (ronda){
                ganador.play();
                if (equipo == 1 && ronda) {
                    puntosE1 += puntos
                    document.getElementById("puntaje1").innerHTML = puntosE1.toString();
                } else if (equipo == 2 && ronda) {
                    puntosE2 += puntos
                    document.getElementById("puntaje2").innerHTML = puntosE2.toString();
                }
                ronda = !ronda;
            }       
        }

        if (event.code === "KeyN"){
            this.siguiente();
        }

        
    }
    event.preventDefault();

}, false);