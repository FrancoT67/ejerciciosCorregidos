const prompt=require("prompt-sync")({sigint:true});

let input=parseInt(prompt('Ingrese un numero para empezar a contar: '))

let sum = input;

while (input != 0) {
    input = parseInt(prompt("Ingresa un número (o 0 para salir): "));
    sum += input;
}

console.log("La suma de los números ingresados es:", sum);
