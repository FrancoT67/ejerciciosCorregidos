const prompt=require("prompt-sync")({sigint:true});

// Si a éste lo hiciste vos, esta perfecto, nomas recorda de usar letras para los indices de tus bucles en lugar de nombre de posibles variables y los ; pero está de 10.

for (let i= 1;i<=100;i++){
    if((i%3==0) && (i%5==0)){
        console.log("FizzBuzz");
    }
    else{
        if (i%3==0){
            console.log("Fizz");
        }
        else{
            if (i%5==0){
                console.log("Buzz");
            }
            //Acá no hacia falta un else para mostrar el número, es redundante esa condicion, ya que si no cumplió la condición de alguno de los if anteriores para ingresar en él y hacer la acción que le pediste sigue de largo.
            console.log(i);

        }
    }
}