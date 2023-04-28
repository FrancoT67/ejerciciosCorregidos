const prompt=require("prompt-sync")({sigint:true});
//primero el var, que no se usa.
function ToTime(num){

    //Tambien te faltó verificar que el numero ingresado sea mayor a 0, porque si es negativo, el programa se rompe y no existe la hora -2 horas y -40 minutos, es erroneo.


    //acá directamente podrias usar el Math.floor(num/3600) para que te devuelva siempre la parte entera redondeando hacia abajo.
    var horas= num/3600;
    //lo de abajo, directamente podrias hacer "let minutes = Math.floor((seconds % 3600) / 60)" y ya estarias haciendo una cuenta mas precisa y facil de leer, en lugar de hacer 2 cuentas en 2 variables distintas
    var rest_h= num%3600;
    var minutos= rest_h/60;

    //Acá par hacerlo mas correcto al ejercicio, faltaria un condicional que cuando la hora o el minuto sea 1 devuelva la palabra en singular y use el plural cuando sean mayores a 1.


    //al usar el math.floor arriba, no te hace falta usar el math.trunc en el console.log y recorda que toda funcion tiene un return, no un console.log.
    console.log( Math.trunc(horas),"hora (s) y ",Math.trunc(minutos)," minuto (s)")
}
var num = parseInt(prompt("Ingresar un número en segundos: "));

//Acá usa un console.log para tu funcion, ya que esta deber tener returns y no console.logs
ToTime(num);
