const prompt=require("prompt-sync")({sigint:true});

// Acá podrias haber guardado la posicion del ultimo elemento del array e ir recorriendolo desde la derecha y desde la izquierda a la vez, e ibas comprando hasta que encontrases una suma y retornara un true, mira el que hice yo.

function sumArray(arreglo,num){
    var cont=0;
    for (i=0;i<=arreglo.length;i++){
        numero=arreglo[i];

        for (j=0;j<=arreglo.length;j++){
            if (numero+arreglo[j]==num){
                cont=cont+1;
            }
        }
    }
    if (cont>=1){
        console.log("TRUE");
    }else {
        console.log("FALSE");
    }
}

var lista=[1,3,6,18,27,100];
var num=parseInt(prompt("Ingrese un número: "));
sumArray(lista,num);