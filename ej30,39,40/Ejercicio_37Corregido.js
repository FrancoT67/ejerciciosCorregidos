const prompt = require("prompt-sync")({sigint:true});

let palabra = prompt("ingrese una oracion: ");

function tipo(palabra) {
    palabra = String(palabra).trim();
    const regxs = {
      "lower": /^[a-z ]+$/, //comprueba mediante una expresion regex si el string ingresado posee alguna letra en minusculas.
      "upper": /^[A-Z]+$/,  //comprueba mediante una expresion regex si el string ingresado posee alguna letra en mayusculas.
      "upperLower": /^[A-Za-z]+$/, //comprueba mediante una expresion regex si el string ingresado posee alguna letra en minuscula y otra en mayuscula.
      "number": /^[0-9]+$/, //comprueba mediante una expresion regex si el string ingresado posee algun número.
    }
    if (regxs.number.test(palabra)) {
      return 'Son numeros';
    }
    if (regxs.lower.test(palabra)){
      return 'Solo minusculas';
    }
    if (regxs.upper.test(palabra)){
      return 'Solo mayusculas';
    }
    if (regxs.upperLower.test(palabra)){
      return 'Tiene mayusculas y minusculas';
    }
}

console.log(tipo(palabra))