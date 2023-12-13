let numero = Number(prompt("Ingrese número"));
console.log("El numero ingresado es " + numero);

let factorizacion = factorizar(numero);

for(number in factorizacion){
    factorizacion[number]=factorizacion[number].toString(); /*Transformo los elementos en string para que pasen a tener los metodos de un string y asi les puedo agregar un espacio a cada elemento*/
}

let factorizacionConEspacios = factorizacion.map((fac) => " " + fac.toString()); /* Le agrego un espacio despues de la coma a cada numero*/

factorizacionConEspacios.length == 1 ? alert("Felicitaciones, su numero es primo") : alert("La factorizacion es " + factorizacionConEspacios);

let operaciones = { /*Uso este objeto para listar las funciones posibles */
    o1: "pop",
    o2: "push",
    o3: "splice",
    o4: "slice",
    o5: "length"
}

let operacion = prompt("Que desea hacer con el array?\n\n1: " + operaciones.o1 + " \n2: " + operaciones.o2 + "\n3: " + operaciones.o3 + "\n4: " + operaciones.o4 + "\n5: " + operaciones.o5);

while((Number(operacion) < 1) || (Number(operacion) > Object.keys(operaciones).length)){
    operacion = prompt("Ingrese un numero valido.\n\n1: " + operaciones.o1 + " \n2: " + operaciones.o2 + "\n3: " + operaciones.o3 + "\n4: " + operaciones.o4 + "\n5: " + operaciones.o5);
}

switch(operacion){ /*Ejecuto la funcion solicitada */
    case "1":
        factorizacionConEspacios.pop();
        alert("La nueva lista es " + factorizacionConEspacios);
        break;
    case "2":
        let numeroPush = Number(prompt("Con que numero desea hacer push?"));
        factorizacionConEspacios.push(numeroPush);
        alert("La nueva lista es " + factorizacionConEspacios);
        break;
    case "3":
        let posicion= Number(prompt("En que indice comienza splice?"));
        let remover = Number(prompt("Cuantos elementos remover?"));
        let stringNuevo = prompt("Inserte string para agregar");
        factorizacionConEspacios.splice(posicion, remover, stringNuevo);
        alert("La nueva lista es " + factorizacionConEspacios);
        break;
    case "4":
        let position= Number(prompt("En que indice comienza slice?"));
        let final = Number(prompt("Antes de que indice termina slice?"));
        nuevoArray = factorizacionConEspacios.slice(position, final);
        alert("La nueva lista slice es " + nuevoArray);
        break;
    case "5":
        alert("El tamaño del array es: " + factorizacionConEspacios.length);
}

console.log(factorizacionConEspacios);

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
                return factorizacion;
            }
        }
        factorizacion[index]=siguientePrimo(factorizacion[index]);
    }
}


