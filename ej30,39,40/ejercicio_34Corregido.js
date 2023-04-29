const prompt=require("prompt-sync")({sigint:true});

let paises = [
    {nombre: "argentina", continente: "sudamerica",  poblacion: 40000000},
    {nombre: "brasil", continente: "sudamerica", poblacion: 300000000},
    {nombre: "venezuela", continente: "sudamerica", poblacion: 25000000},
    {nombre: "chile", continente: "sudamerica", poblacion: 10000000},
    {nombre: "australia", continente: "oceania", poblacion: 18000000},
    {nombre: "nueva zelanda", continente: "oceania", poblacion: 8000000},
    {nombre: "china", continente: "asia", poblacion: 1000000000},
    {nombre: "tailandia", continente: "asia", poblacion: 32000000},
    {nombre: "vietnam", continente: "asia", poblacion: 23000000},
    {nombre: "españa", continente: "europa", poblacion: 29000000},
    {nombre: "alemania", continente: "europa", poblacion: 33000000},
    {nombre: "francia", continente: "europa", poblacion: 65000000},
    {nombre: "portugal", continente: "europa", poblacion: 4000000},
    {nombre: "grecia", continente: "europa", poblacion: 12000000},
  ];


  // no podes usar el switch case porque si agregas mas elementos con mas continentes, tendrias que agregar mas y mas casos, hasta volverlo algo super largo y nada escalable.
function doubleFilter(paises,cont,pobl){
    lista=new Array
    for (i=0;i<paises.length;i++){
        poblacion=paises[i].poblacion;
        pais=paises[i].nombre;
        switch(cont){
            case "asia":
                lista.push(pais);
                lista.push(poblacion);
                break;
            case "europa":
                lista.push(pais);
                lista.push(poblacion);
                break;
            case "sudamerica":
                lista.push(pais);
                lista.push(poblacion);
                break;
            case "oceania":
                lista.push(pais);
                lista.push(poblacion);
                break;
        }
    }
    console.log(lista);
}

var cont = String(prompt("Ingrese un continente: "));
var pobl = parseInt(prompt("Ingrese nro población: "));
doubleFilter(paises,cont,pobl);