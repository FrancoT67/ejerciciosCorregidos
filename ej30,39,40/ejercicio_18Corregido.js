const prompt=require("prompt-sync")({sigint:true});

//está bien pero es medio rebuscado como se llega al funcionamiento, se podria simplificar de la siguiente forma:



function breakStatement(num){
    //el termino var no se usa, se usa let, el decir new Array para declarar un array/arreglo/lista vacio esta en camino a ser desactualizado, lo recomendable es usar [] y listo.
    var arreglo = new Array;
    // Acá acordate de usar nombres faciles paras la variables, cosa que sea mas facil de leer.
    var cont=0;
    // Acá el ejercicio pedía 10 iteraciones, el poner +20 al numero que pasa el usuario es medio raro e inestable, lo correcto hubiera sido poner for (let i = 1; i <= 10; i++), de ésta forma hacemos las 10 iteraciones independientemente del valor que ingrese el usuario e incrementamos en 1 el bucle, cosa de no hacer cosas raras.  
    for(j=num;j<=num+20;j+=2){
        // Acá el ejercicio dice "itere en un bucle aumentando en 2 hasta un límite de 10 veces." por eso directamente podias hacer que el contador sume de a 2 con cont+=2 y listo
        cont=cont+1;
        arreglo.push(j);
        if (cont==j){
            // acá directamente podrias poner un return diciendo el mensaje y se pararia el bucle, cuando se cumpla la condicion, por ende no necesitarias usar el break statemant.
            break;
        }
    }
    return arreglo;
}

var num = parseInt(prompt("Ingrese numero: "));
lista=breakStatement(num);
console.log(lista);
var can=lista.length;
if(can<10){
    console.log("Se interrumpió la ejeución")
}