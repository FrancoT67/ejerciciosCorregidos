const prompt=require("prompt-sync")({sigint:true});

let limite=parseInt(prompt('Ingrese la cantidad de elementos que tendrá la lista:(Número) '));

function nuevoArreglo(a=limite) {
    let lista=[];
    if (limite<0) {
        console.error('No puedes crear un arreglo con un limite negativo');
        
    } else {
        for (let i = 1; i <= a; i++) {
            lista.push(i);
        }
        
        return lista;    
    }
}

console.log(nuevoArreglo(limite));