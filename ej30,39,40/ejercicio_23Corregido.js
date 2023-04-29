const prompt=require("prompt-sync")({sigint:true});

//Faltó comprobar que el numero sea mayo a 0, porque sino como creas un arreglo con -3 elementos

//los let te faltaron y las funciones siempre tienen return, no un console.log().

let numero=parseInt(prompt("ingrese numero: "));
function arregloDeObjetos(num){

    if (num>0) {
        lista=[];
        for (i=1;i<=num;i++){
            lista.push({valor:i});
        }
        return lista;
    } else {
        return 'El numero debe ser mayor a 0';
    }
}

console.log(arregloDeObjetos(numero));
