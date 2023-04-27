const prompt=require("prompt-sync")({sigint:true});

let limite= parseInt(prompt('Ingrese el número de comienzo: '));

function breakStatement(num) {
    let results = [];
    let total = 0;
    
    for (let i = 1; i <= 10; i++) {
      num += 2;
      if (total === num || i === num) {
        results.push(i);
        return `Se interrumpió la ejecución, la lista es: [${results}]`;
      }
      
      total += num;
      results.push(num);
    }
    
    return results;
  }
  

console.log(breakStatement(limite));