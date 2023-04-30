const prompt=require("prompt-sync")({sigint:true});

//Es un monton la cantidad de cosas que estan mal hechas.

let num =parseInt(prompt("Ingrese el número al que apostara, por favor: "));
let montoA =parseInt(prompt("Ingrese el montó a apostar, por favor: "));
let montoT=50+montoA;
let dado= Math.floor(Math.random() * 6);

if(Number.isNaN(num)){
    num=1;
}

if(Number.isNaN(montoA)){
    montoA=20;
}  

while(montoT===0){
    while(montoT>=200){
        if(num===dado){
            montoT=montoT+montoA
            console.log("Ganaste!! Tu montó es de: "+montoT)
        }else{
            montoT=montoT-montoA
            console.log("Perdiste!! Tu montó es de: "+montoT)
        }
    let num =parseInt(prompt("Ingrese un nuevo número al que apostara, por favor: "))
    let montoA =parseInt(prompt("Ingrese un nuevo montó a apostar, por favor: "))
    }

}
console.log("Programa finalizado")