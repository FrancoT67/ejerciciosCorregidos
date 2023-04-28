console.log("Hola mundo");

console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    //process.exit();
})