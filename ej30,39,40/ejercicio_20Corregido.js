const prompt=require("prompt-sync")({sigint:true});

//bueno, te faltó verificar que si el numero ingresado por el usuario es positivo realice la suma pero si es negativo realice la resta de numeros negativos y el var.

function sumattion(num){
    var acum=0;
    for(i=0;i<=num; i++){
        acum=acum+i;
    }
    return acum;
}

var numero=parseFloat(prompt("ingrese numero: "));
console.log(sumattion(numero));