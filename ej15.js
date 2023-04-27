const prompt=require("prompt-sync")({sigint:true});

let limite = parseInt(prompt('Cuantos elementos va a tener la lista a evaluar? (Ingresar un número): '));

if (limite<=0) {
    console.log('Error: El número de elementos debe ser mayor que 0.');

}else{
    let lista=[];
    for (let i = 0; i < limite; i++) {
        lista.push(parseInt(prompt('Ingrese un elemento: ')));
    }
    let divisor = parseInt(prompt('Ingrese el número que va a ser el divisor: '));  

    function divisibles(a,b) {
        let result=[];
        for(let i=0;i<=a.length;i++) {
            if (a[i]%b==0) {
                result.push(a[i]);
            } 
        }
        return result;
    }
    console.log(divisibles(lista,divisor));
}


