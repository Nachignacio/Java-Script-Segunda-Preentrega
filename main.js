let numero = Number(prompt("Ingrese número"));
console.log("El numero ingresado es " + numero);

factorizar(numero);

/*Primero creo una funcion que me devuelva el primer numero primo siguiente al numero primo que le ingreso*/

function siguientePrimo(primerPrimo){
    let noEsPrimo = false;
    let primerValorAnterior = primerPrimo;
    let divisor = primerPrimo;
    primerPrimo++; /* Aumento el numero en una unidad para compararlo con el anterior*/
    while(!noEsPrimo && divisor>1){
        if(!(primerPrimo%divisor)){
            divisor=primerPrimo;
            primerPrimo++;
        }
        else{ /*Si el divisor actual no lo dividio con resto 0, voy restando por una unidad para averiguar cual es el proximo que lo divide con resto 0 */
            divisor--;
        }
    }
    if(divisor == 1){
        noEsPrimo = false;
        return primerPrimo
    }
}

/* Con esta funcion voy a factorizar mi numero */

function factorizar(factorizador){
    let factorizacion = [2];
    let index = 0;
    while(factorizador!=1){
        while(!(factorizador%factorizacion[index]) && factorizador!=1){
            factorizador/=factorizacion[index]; /* Divido al numero en cuestion para seguir con el siguiente divisor */
            console.log(factorizacion);
            if(factorizador!=1){ /* Si es distinto de uno entonces agrego el divisor que factoriza y continuo */
                factorizacion.push(factorizacion[index]); /* Apendo el divisor nuevo al array existente con push, agregando un espacio despues de la coma */
                index++; /* Me ubico en el indice del siguiente divisor que ya agregue con push */
            }else{ /* Si es uno entonces mi tarea termino y devuelvo si se trato de un numero primo o la lista de divisores en la factorizacion */
                return (factorizacion.length == 1) ? alert("Felicitaciones, su numero es primo") : alert("La factorizacion es " + factorizacion);
            }
        }
        factorizacion[index]=siguientePrimo(factorizacion[index]);
    }
}


