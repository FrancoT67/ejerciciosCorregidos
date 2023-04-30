const prompt=require("prompt-sync")({sigint:true});

let dinero = 50; // dinero inicial del usuario

while (dinero > 0) {
  let numeroApostado = 1; // número por defecto al que se apuesta
  let cantidadApostada = 20; // cantidad por defecto apostada

  // mostrar el dinero actual del usuario
  console.log("Usted tiene $" + dinero + " para apostar.");

  // pedir al usuario que ingrese el número y la cantidad a apostar
  numeroApostado = parseInt(prompt("Ingrese un número del 1 al 6 para apostar:"));
  cantidadApostada = parseInt(prompt("Ingrese la cantidad de dinero que desea apostar:"));

  

  // verificar que la cantidad apostada no supere el dinero disponible del usuario
  while (cantidadApostada > dinero) {
    console.log("No tiene suficiente dinero para apostar esa cantidad.");
    cantidadApostada = parseInt(prompt("Ingrese una cantidad de dinero menor o igual a $" + dinero + " para apostar:"));
  }

  // generar un número aleatorio del 1 al 6 para representar el dado
  let dado = Math.floor(Math.random() * 6) + 1;

  // mostrar el número obtenido del dado
  console.log("El número obtenido fue: " + dado);

  // verificar si el usuario acertó el número apostado
  if (dado === parseInt(numeroApostado)) {
    // el usuario acertó el número, gana el doble de la cantidad apostada
    let ganancia = cantidadApostada * 2;
    dinero += ganancia;
    console.log("¡Felicitaciones! Acertó el número y ganó $" + ganancia);
  } else {
    // el usuario no acertó el número, pierde la cantidad apostada
    dinero -= cantidadApostada;
    console.log("Lo siento, no acertó el número. Perdió $" + cantidadApostada);
  }

  // mostrar el dinero restante del usuario
  console.log("Le quedan $" + dinero + " para seguir apostando.");

  // verificar si el usuario ha ganado el juego
  if (dinero >= 200) {
    console.log("¡Felicitaciones! Ha ganado el juego con $" + dinero + ".");
    break; // salir del bucle
  }
}

console.log("Se ha quedado sin dinero para apostar. Fin del juego.");
