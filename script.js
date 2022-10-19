function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
        var lines = this.result.split('\n');
        document.getElementById("pregunta").innerHTML = lines[0];
        for (var line = 1; line < lines.length; line++) {
            var res = "res" + line.toString();
            document.getElementById(res).innerHTML = lines[line];
        }
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
    
}

document.addEventListener('keypress', (event) => {
    if (event.defaultPrevented) {
        return;
    }

    if (event.code === "Digit1"){
        document.getElementById("res1").style.fontSize = "60px";
    } 
    
    else if (event.code === "Digit2"){
        document.getElementById("res2").style.fontSize = "60px";
    } 
    
    else if (event.code === "Digit3"){
        document.getElementById("res3").style.fontSize = "60px";
    } 
    
    else if (event.code === "Digit4"){
        document.getElementById("res4").style.fontSize = "60px";
    } 
    
    else if (event.code === "Digit5"){
        document.getElementById("res5").style.fontSize = "60px";
    }

    event.preventDefault();

}, false);

