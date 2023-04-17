// Este es el ejemplo que hicimos pero usando un html para que se viera ⬇


/*let n1= parseInt(prompt("Ingrese un numero"));
let n2= parseInt(prompt("Ingrese un numero"));


let suma= n1+n2;

console.log(suma);
*/

// Fin ejemplo que hicimos 


// Ejemplo para hacerlo todo desde la terminal ( Se ve feo pero es más fácil de lo que parece).

/**
 * 1. Primero necesitas usar una libreria, te vas arriba donde dice Terminal y pones en New Terminal o Nueva terminal.
 * 2. Luego de abrirla pones npm i inquirer y enter, esa libreria hace que sea mas fácil manipular la entrada y salida de texto desde y hacia la terminal/consola.
 * 3. En la linea de 
                    const readline = require('readline').createInterface({
                      input: process.stdin,
                      output: process.stdout,
                    });
- Lo que hace el const es definir que la variable readLine es algo constante y que nunca va a ser modificada en el trasncurso del codigo, ésto es porque cuando importas una libreria, que seria el require('readLine') es el equivalente a import from de python.
- El .createInterface lo que hace es crearlo al readLine como un objeto con las popiedades input(entrada) y output(salida) con los valores de process.stdin y process.stdout.
- process.stdin y process.stdout son funciones nativas de NodeJS para ingresar datos y mostrarlos por la terminal.

4. En la linea

      readline.question(`ingrese el primer numero: `, n1 =>{

    Lo que hace es:
    - llamar a la libreria readLine(que definimos mas arriba) y llama a su metodo(funcion interna) .question ( se usa el . para llamar metodos de los objetos/clases,
     es Programacion Orientada a Objetos(POO)).
    - Y por comillas simples muestra el texto 'ingrese el primer numero'.
    -Luego al valor que va a recibir lo asigna a n1 y con una arrowFuntion ( funcion flecha) al n1 lo reasigna pero parseandolo(convirtiendolo a formato) a Int.
    -Luego se repite pero para el n2.
    -Luego muestra un texto con las backStick que te permiten concatenar variables con textos, y definis una variable result para almacenar el resultado de hacer la suma de n1+n2.
    - Para mostrarlo por un console.log().
    -Al ultimo se llama al metodo close() de la libreria readLine para que se finalice el proceso.
  5. Para probarlo primero hace el paso 2. y luego en la terminal pones node y el nombre el archivo. Ej: en este caso seria node ej2.js 

    
    */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`ingrese el primer numero: `, n1 => {
    n1=parseInt(n1);
    readline.question("Ingrese el segundo numero: ",n2 =>{
        n2=parseInt(n2)
        readline.question(`la suma de ${n1} + ${n2} es (Presione Enter):`,result =>{
            result=n1+n2
            console.log(result)
            readline.close()

        } )
    })
  });  

/*
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });
  */