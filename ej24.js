const prompt=require("prompt-sync")({sigint:true});

let arregloVacio=[];
let arreglo=[
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

function pluck(arr, key) {
    if(arr.length>0){
        let result=[];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i][key])
        }
        return result;
    }else{
        return 'Ingresó un arreglo vacio.'
    }
}

console.log(pluck(arreglo,'nombre'))
console.log(pluck(arreglo,'edad'))
console.log(pluck(arreglo,'pais'))
console.log(pluck(arregloVacio,'pais'))