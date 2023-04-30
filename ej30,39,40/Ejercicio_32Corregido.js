const prompt=require("prompt-sync")({sigint:true});
let letra=prompt("Ingrese la letra F: ")
do {
    letra=prompt("La letra ingresada no era 'F', por favor, ingrese la letra 'F': ")
} while (letra!='F');
    
console.log("LO LOGRASTE")

