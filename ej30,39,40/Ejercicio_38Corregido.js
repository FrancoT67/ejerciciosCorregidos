const prompt = require("prompt-sync")({sigint:true});
let palabra = prompt("ingrese la palabra: ").toLowerCase().replace(/\s/g,"")

let reversa = palabra.split("").reverse().join("");

function palindromo (palabra) {
    if(palabra == reversa){
      return 'Es palindromo';
    }
    else{
      return 'No es palindromo';
    }
 }
console.log(palindromo(palabra));