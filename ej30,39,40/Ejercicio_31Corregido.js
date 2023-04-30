const prompt=require("prompt-sync")({sigint:true});
function esPrimo(num) {
    let i = 2;
    while (i < num) {
      if (num % i === 0) {
        return false;
      }
      i++;
    }
    return num > 1;
}
  
  let num = prompt("Ingrese un número:");
  if (esPrimo(num)) {
    console.log(num + " es un número primo");
  } else {
    console.log(num + " no es un número primo");
  }
  