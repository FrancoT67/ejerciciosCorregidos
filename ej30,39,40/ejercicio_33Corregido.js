
// te faltó agregar/importar la libreria para usar la terminal/prompt.
const prompt=require("prompt-sync")({sigint:true});

do {
    // nunca validaste que el valor ingresado por el usuario sea un valor valido o no. 
    let num1 =parseInt(prompt("Ingrese numero 1: "))
    let num2 =parseInt(prompt("Ingrese numero 2: "))
    let total=num1+num2;
    // acá podias haber puesto console.log(`El total de la suma de ${num1} y ${num2} es ${num1+num2}`) y te evitas usar una variable para almacenar la cuenta.(las variables ocupan espacio de memoria, no es eficiente éso).
    console.log("total: "+total)
    let respuesta=String(prompt("Quiere continuar? 1. Si 2. No:"));
    //acá esta condicion esta mal, porque si pongo no o si se salta el while interno ese ya que dice que haga ese respuesta=String cuando respuesta sea distinto de "si" y a su vez sea distinto de "no"
    while (respuesta!="si" && respuesta!="no") {
        respuesta=String(prompt("Quiere continuar? 1. Si 2. No:"));
    }

}while(respuesta=="si");
console.log("fin")