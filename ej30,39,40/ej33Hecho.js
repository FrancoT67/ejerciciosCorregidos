//no habias importado la libreria para que lea los mensajes de la terminal/consola.
const prompt=require("prompt-sync")({sigint:true});

let respuesta=String(prompt('Desea comenzar? S/N: '))
if ((respuesta=="s")||(respuesta=="S")||respuesta=="si" || respuesta=="Si") {
    do { 
        let num1 =parseInt(prompt("Ingrese el primer numero a sumar: "))
        let num2 =parseInt(prompt("Ingrese el otro numero a sumar: "))
        console.log(`El total de la suma de ${num1} y ${num2} es ${num1+num2}`)
        respuesta=String(prompt('Desea parar? S/N: '))
    
    }while(respuesta!="si");
    console.log("Fin del Programa");
    
} else {
    console.log("valor incorrecto");
}