//Ejercicio precalentando: mostrar información con Javascript
let resultado = window.confirm('¿Vas a salir de casa?');
if (resultado === true) {
    window.alert('Chequea el pronostico del tiempo antes de salir.');
} else {
    window.alert('Que bueno que te quedes. Va a llover mucho hoy.');
}

console.log(resultado)

//Interactuando con el usuario desde la consola.
let nombre = prompt('Ingrese su nombre');
let edad = prompt('Ingrese su edad');
document.write('el nombre del usuario es: ' + nombre)
document.write('<br>La edad del usuario es: ' + edad)

let fanDeportes = confirm('¿Te gusta el deporte?');
console.log(fanDeportes)

alert(`Muchas Gracias ${nombre} por responder nuestras preguntas`)

//crear programa con numero aleatorio entre el 1 y el 20
var num = Math.floor(Math.random() * 20) + 1;
var esPar = num % 2 == 0 ? true : false;
console.log(esPar, num);

//Programa que pida al usuario un numero del 1 al 7 y lo relacione con el dia de la semana.
var numero = prompt('introduce un numero del 1 al 7:');
var diaSemana = "";
//por medio del condicional switch evaluo más de un caso, y selecciona una opcion entre varias
//Switch recibe un “caso” y lo evalúa hasta encontrar el caso que corresponda.
switch (numero) {
    case "1":
        diaSemana = "lunes";
        break;
    case "2":
        diaSemana = "martes";
        break;
    case "3":
        diaSemana = "miercoles";
        break;
    case "4":
        diaSemana = "jueves";
        break;
    case "5":
        diaSemana = "viernes";
        break;
    case "6":
        diaSemana = "sabado";
        break;
    case "7":
        diaSemana = "domingo";
        break;

    //Se puede usar la opción “default” para cuando no se encuentra el caso.
    default:
        diaSemana = "El número no es válido";
}
console.log(diaSemana);

//Programa que pida al usuario un 3 numeros y la suma de los dos mas altos.
var num1 = parseInt(prompt("Ingrese el primer número:"));
var num2 = parseInt(prompt("Ingrese el segundo número:"));
var num3 = parseInt(prompt("Ingrese el tercer número:"));
var sumaNumeros = 0;
if (num1 >= num2 && num1 >= num3) {
    sumaNumeros = num1;
    if (num2 >= num3) {
        sumaNumeros += num2;
    }
    else {
        sumaNumeros += num3;
    }
}

else if (num2 >= num1 && num2 >= num3) {
    sumaNumeros = num2;
    if (num1 >= num3) {
        sumaNumeros += num1;
    }
    else {
        sumaNumeros += num3;
    }

}
else {
    sumaNumeros = num3;
    if (num1 >= num2) {
        sumaNumeros += num1;
    }
    if (num2 >= num1) {
        sumaNumeros += num2;
    }
    //se podria poner un : else {suma += num2;}
}
console.log("La suma de los dos numeros más altos es:", sumaNumeros);

//Programa que pida al usuario un 3 numeros del 1 al 10, si es mayor a 5 será verdadero.
var numero1 = parseInt(prompt("Ingrese el primer número (1-10):"));
var numero2 = parseInt(prompt("Ingrese el segundo número (1-10):"));
var numero3 = parseInt(prompt("Ingrese el tercer número (1-10):"));

var promedio = (numero1 + numero2 + numero3) / 3;
var serMayor = promedio > 5 ? true : false;
console.log(serMayor, promedio);

//Averiguar los años del usuario preguntandole el año de nacimiento y la fecha actual.
var anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
var fechaActual = new Date();
var anioActual = fechaActual.getFullYear();
var anios = anioActual - anioNacimiento;
console.log("Su edad actual es:", anios);

//descuentos en base a la edad y el genero haciendo una previa solicitud de ambas variables.
var edades = parseInt(prompt("¿Cuantos años tienes?"));
var genero = prompt("Dinos tu genero (masculino/femenino):");
var descuento = 0;
if
    (edades < 18) {
    if (genero == "femenino") {
        descuento = 15;
    }
    else {
        descuento = 10
    }

}
console.log("Tienes un descuento del", descuento + "%");

//crear programa que nos pida al usuario su nombre y edad
//determine si es mayor de edad y su nombre contenga más de 5 letras.




