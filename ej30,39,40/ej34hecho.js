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
    {nombre:"grecia",continente:"europa",poblacion:120000000},

  ];

function doubleFilter(paises,continente,poblacion){
    lista=[];
    if (continente == undefined || poblacion == undefined) {
        return 'Error, Faltan elementos';
    } else {
        if (poblacion < 0) {
            return 'Error, poblacion no puede ser menor a cero';
        } else {
            if (continente === '') {
                return paises;
            }else{
                for (i=0;i<paises.length;i++){
                    if (paises[i].continente == undefined || paises[i].poblacion == undefined || paises[i].nombre == undefined) {
                        return 'no existe el elemento'
                    }else{
                        if (paises[i].continente==continente && paises[i].poblacion>=poblacion){
                            lista.push(paises[i]);
                        }

                    }
                }
            
            }
            return lista;
        }
    }
}


console.log(doubleFilter(paises,"europa",1));