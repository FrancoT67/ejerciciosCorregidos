const prompt=require("prompt-sync")({sigint:true});

let numero=parseFloat(prompt("ingrese numero: "));

function sumattion(num){
    let suma=0;
    if (num>0) {
        for(let i=0;i<=num; i++){
            suma+=i;
        }
    } else {
        for(let i=0;i>=num; i--){
            suma+=i;
        }
    }
    return suma;
}

console.log(sumattion(numero));