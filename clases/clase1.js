//Ejercicio 1: Declaración de variables + Ejercicio 2: Almacenando datos
let edad = 10
edad = 12
let peso = 20

console.log(edad)
console.log(peso)

//Ejercicio 3: Otro tipo de dato
let saludo = "Hola mundo"
console.log(saludo)


//Ejercicio 4: Intercambiando valores
let numeroA = 30

let numeroB = 45

let numeroC = numeroA
//el valor de C es 30
numeroA = numeroB
//ahora el numero a vale 45 
numeroB = numeroC

console.log(numeroA)
console.log(numeroB)

//Ejercicio 5: Más tipos de datos
let meGustaElHelado = true;
console.log(meGustaElHelado);

//Ejercicio 6: variables y operadores.
let resultadoSuma = 5 + 10;
console.log(resultadoSuma);

let resultadoResta = 20 - 5;
console.log(resultadoResta);

let resultadoMultiplicacion = 30 * 30;
console.log(resultadoMultiplicacion);

let comparacion = 2 > 1
console.log(comparacion);

let comparacion2 = 1 > 1
console.log(comparacion2);

//Ejercicio 7: mostrar información con Javascript
let edadUser = prompt ('¿Cual es tu edad?')
console.log(typeof edadUser);
console.log(27)
alert(`Muchas Gracias ${edadUser} por responder nuestras preguntas`)

//Ejercicio 8: Hacer un conversor de euros a dólares.
function deEuroAdolar(euro){
    //Supongamos que 7 euro equivale a 2 dólares.
    const resultado = euro * 2;
    console.log(resultado);
  }
  
deEuroAdolar(7);


//Ejercicio 9:calcular IVA
const precio = 100;
const precioConIva = precio*1.21;
console.log(precioConIva);

//Ejercicio 10: Vamos a mandar al usuario la caja de sus sueños.

const nombre = 'Juan';
const materia = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza extraña, indómita';

const favorita = 'El señor '+ nombre +' ha pedido una caja de ' + materia + ' con unas dimensiones ' + dimensiones + '. ' + comentario + '.';

console.log(favorita);

//Ejercicio 11: declarando variables.

const resultadoOperacion = 23 + (15 * (3 / 2)) - 10
console.log(resultadoOperacion);

resultadoOperacion - 5 = 


//Ejercicio 12: crear 12 variables

var enero = 1;
var febrero = 2;
var marzo = 3;
var abril = 4;
var mayo = 5;
var junio = 6;
var julio = 7;
var agosto = 8;
var septiembre = 9;
var octubre = 10;
var noviembre = 11;
var diciembre = 12;

enero > diciembre

console.log(enero > diciembre);

junio < julio

console.log(junio < julio);
