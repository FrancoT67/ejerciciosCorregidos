const prompt=require("prompt-sync")({sigint:true});

let numero=parseInt(prompt('Ingrese al que desea contar: '))

function contarHasta(num) {
    let i = 0;
    let lista = [];
    if (num>0) {
        while (i <= num) {
          lista.push(i);
          i++;
        }
      
        return lista;
        
    } else {
        while (i >= num) {
            lista.push(i);
            i--;
          }
        
          return lista;
    }
  
  }
  
console.log(contarHasta(numero))