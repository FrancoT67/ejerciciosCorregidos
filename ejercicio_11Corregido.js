const prompt=require("prompt-sync")({sigint:true});

let num1= parseInt(prompt("Ingrese el primer numero: "));
let num2= parseInt(prompt("Ingrese el segundo numero: "));
let num3= parseInt(prompt("Ingrese el tercer numero: "));

// Recordá de no usar los nombres que definiste como variables en los parametros de las funciones, usa distintos para no confundirte y hacer codigo mas legible.
function operadoresLogicos(n1,n2,n3) {

    // Acá el enunciado pedia el numero mayor y si es positivo, te faltó evaluar que tambien sean valores mayores a 0.
    if ((n1>n2)&&(n1>n3)&&(n1>0)) {
        console.log(`Numero 1(${num1}) es mayor y positivo`); 
    }else{
        if ((n1<0)||(n2<0)||(n3<0)) {
            console.log("Hay numeros negativos");  
        }else{
            if ((n3>n1)&&(n3>n2)) {
                // Acá directamente retorna el valor sumado 1, no hagas ++num3 y luego retornar num3 es redundante y hace operaciones de mas al vicio.
                return n3+1;   
            }else{
                if ((n1==0)||(n2==0)||(n3==0)) {
                    return console.error('Error, 0 no es valido para este programa.');
                }
                else{
                    // Te faltó el ; y retorna el booleano de false, no un texto.
                    return false;
                }
                
            }

        }

    }
    
}

// Acá nunca llamaste al num3 por eso fallaba, tenias console.log(operadoresLogicos(num1,num2,num1))
console.log(operadoresLogicos(num1,num2,num3))
