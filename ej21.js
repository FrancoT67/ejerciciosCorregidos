const prompt=require("prompt-sync")({sigint:true});

let nombre=prompt("ingrese nombre: ");

function abbrevName(name) {

   // Elimina espacios al principio y al final y divide el string en palabras separadas por espacio.
    let words = name.trim().split(" "); 
    
    // Verifica que el arreglo resultante tenga al menos dos elementos.
    if (words.length < 2) { 
      return 'Debe ingresar un NOMBRE y un APELLIDO, le faltó ingresar otro dato mas'; 
    }
    
    // Toma la primera letra de cada palabra y convertirla a mayúscula.
    let initials = words.map(word => word[0].toUpperCase());
    //Devuelve las letras unidas con un . entre cada una.  
    return initials.join(".");
}
  
  

console.log(abbrevName(nombre));