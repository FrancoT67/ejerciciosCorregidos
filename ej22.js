const prompt=require("prompt-sync")({sigint:true});

function moveZeros(arr) {

    if (arr.length>0) {
        // Crear dos arreglos: uno para los números distintos de cero y otro para los ceros
        let nonZeros = [];
        let zeros = [];
        
        // Recorrer el arreglo recibido
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== 0) { // Si el elemento actual es distinto de cero, agregarlo al arreglo de números distintos de cero
            nonZeros.push(arr[i]);
          } else { // Si el elemento actual es cero, agregarlo al arreglo de ceros
            zeros.push(arr[i]);
          }
        }
        // Uno los dos arreglos y devolver el resultado
        return nonZeros.concat(zeros);
        
    } else {
        return 'Debe ingresar un arreglo';
    }
  }

let lista1 = [false,1,0,1,2,0,1,3,"a"]
let lista2 = [1,2,0,1,0,1,0,3,0,1]
let lista3 = []
console.log(' ');
console.log(`Con la lista [${lista1}], el resultado es: ` + '[' + moveZeros(lista1) + ']');
console.log(' ');
console.log(`Con la lista [${lista2}], el resultado es: ` + '['+ moveZeros(lista2)+ ']');
console.log(' ');
console.log(`Con la lista [${lista3}], el resultado es: ` + '[' + moveZeros(lista3) + ']');
