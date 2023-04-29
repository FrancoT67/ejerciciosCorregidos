const prompt=require("prompt-sync")({sigint:true});
// el var no se usa
function abbrevName(nombre){
    var c =nombre.toUpperCase();
    var cadena=c.split('');

    //Acá podrias haber usado el metodo .map de los arrays (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) y simplificabas todo en una sola linea.

    var inicial1= cadena[0]
    var inicial2= String
    for (i=0;i<=cadena.length;i++){
        if (cadena[i]==" "){
            inicial2=cadena[i+1]
        }
    }
    console.log(inicial1+"."+inicial2)
}

var nom=prompt("ingrese nombre: ");
abbrevName(nom);