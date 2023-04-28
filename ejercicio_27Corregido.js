const prompt=require("prompt-sync")({sigint:true});

// este esta bien, no le veo algun cambio necesario.

let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
    ];
  
function gananciaTotal(lista){
    let acum=0
    for (i=0;i<lista.length;i++){
        acum = acum+(lista[i].ganancia);
    }
    console.log("Ganancia total del periodo: "+acum);
}

gananciaTotal(balancesUltimoSemestre);