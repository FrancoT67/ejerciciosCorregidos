const prompt=require("prompt-sync")({sigint:true});

let p1 = prompt("Ingrese la primer palabra: ");
let p2 = prompt("Ingrese la segunda palabra: ");
let m1 = parseInt(prompt("Ingrese el primer número: "));
let m2 = parseInt(prompt("Ingrese un segundo número: "));

for (let i= 1;i<=100;i++){

    //Acordate de encapsular tus condiciones entre () para mejor legibilidad, pero por ordenes de precedencia de los signos, si no los pones funciona igual.
    if((i%m1==0) && (i%m2==0)){
        console.log(p1+p2);
    }
    else{
        if (i%m1==0){
            console.log(p1);
        }
        else{
            if (i%m2==0){
                console.log(p2);
            }
            // Acá lo mismo que en el ej 13, los ; , el nombre de tu indice de bucle y el else redundante.
            console.log(i);
        }
    }
}