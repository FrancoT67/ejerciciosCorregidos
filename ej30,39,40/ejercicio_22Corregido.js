const prompt=require("prompt-sync")({sigint:true});

//si usabas 2 arreglos era mas simple de realizar y te faltó verificar que el arreglo, sea una lista y no un elemento vacio o una lista vacia.
// no voy a repetir lo del var.
function moveZeros(arreglo){
    var cont=0
    for(i=0;i<=arreglo.length;i++){
        if (arreglo[i]==0){
            cont=cont+1
        }
    }
    var nuevoarreglo=arreglo.filter(item=>item!=0);
    for (i=1;i<=cont;i++){
        nuevoarreglo.push(0)
    }
    console.log(nuevoarreglo)
}

var lista=[1,1,1,0,0,2,3];
moveZeros(lista);