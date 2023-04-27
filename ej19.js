const prompt=require("prompt-sync")({sigint:true});

let segundos= parseInt(prompt('Ingrese la cantidad de segundos: '));

function toTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    if (seconds>=0) {
      let hoursString = hours + " hour(s)";
      let minutesString = minutes + " minute(s)";
      
      if (hours === 1) {
        hoursString = "1 hour";
      }
      
      if (minutes === 1) {
        minutesString = " 1 minute";
      }
      
      return hoursString + " and " + minutesString;
      
    } else {
      return `Error, El valor que ingreso ( ${seconds} )debe ser mayor o igual a 0.`
    }
  }
  

console.log(toTime(segundos));