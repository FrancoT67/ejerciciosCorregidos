const prompt=require("prompt-sync")({sigint:true});

let inicio=parseInt(prompt('Ingrese el numero a usar de inicio: '));
let final=parseInt(prompt('Ingrese el numero a usar de final: '));
let sumador=parseInt(prompt('Ingrese el numero a usar de sumador: '));


function rango(a,b,c) {
    let lista=[]

    if (a>b) {
        return console.error('El final no puede ser menor que el numero de comienzo');
    } else {
        for (let i = a; i <= b;i+=c) {
            lista.push(i);
        }
        return lista;
    }
}

console.log(rango(inicio,final,sumador))

