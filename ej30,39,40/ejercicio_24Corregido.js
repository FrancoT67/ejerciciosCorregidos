const prompt=require("prompt-sync")({sigint:true});

var arreglo=[
    {   nombre:"julieta",
        edad:17,
        pais:"argentina"
    },
    {   nombre:"claudio",
        edad:43,
        pais:"argentina"
    },
    {   nombre:"luciana",
        edad:30,
        pais:"argentina"
    }
];
//esta bien esta, solo quue tendrias que hacer un if para validar que el arreglo tenga datos y no sea un arreglo vacio.
const pluck = (arr, key) => arr.map(elementos => elementos[key]);

console.log(pluck(arreglo,'edad'));
console.log(arreglo)