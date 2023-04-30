const prompt = require("prompt-sync")({sigint:true});

let paises = [
    {nombre: "Argentina", continente: "Sudamerica", poblacion: 40000000},
    {nombre: "Brasil", continente: "Sudamerica", poblacion: 300000000},
    {nombre: "Venezuela", continente: "Sudamerica", poblacion: 25000000},
    {nombre: "Chile", continente: "Sudamerica", poblacion: 10000000},
    {nombre: "Australia", continente: "Oceania", poblacion: 18000000},
    {nombre: "Nueva Zelanda", continente: "Oceania", poblacion: 8000000},
    {nombre: "China", continente: "Asia", poblacion: 1000000000},
    {nombre: "Tailandia", continente: "Asia", poblacion: 320000000},
    {nombre: "Vitnam", continente: "Asia", poblacion: 230000000},
    {nombre: "España", continente: "Europa", poblacion: 290000000},
    {nombre: "Alemania", continente: "Europa", poblacion: 330000000},
    {nombre: "Francia", continente: "Europa", poblacion: 650000000},
    {nombre: "Portugal", continente: "Europa", poblacion: 40000000},
    {nombre: "Grecia", continente: "Europa", poblacion: 12000000},
]
function doublefilter(paises, continentes, poblaciones){
    let respuesta ={
        paises: [],
        poblacionTotal: 0
    } 
    for(i=0; i<paises.length; i++){
        if(paises[i].continente == continentes && paises[i].poblacion >= poblaciones){
            respuesta.paises.push(paises[i].nombre);
            respuesta.poblacionTotal += paises[i].poblacion;
            

        }
    }
    return respuesta;
}
console.log(doublefilter(paises,"Sudamerica", 30000000),'\n');
console.log(doublefilter(paises,"Europa", 30000000));