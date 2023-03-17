//array arbol genealogico
var abuelos = ["abuelo Manuel", "abuelo Pedro"]
var padres = []
padres.push("Padre Juan");
padres.push("Madre Teresa");
var hijos = ["hijo Leo", "hijo Mario"]
var nietos = []
nietos.push("Nieto Mario");
nietos.push("Nieta Estela");

console.log("Cantidad de abuelos:", abuelos.length);
console.log("Cantidad de padres:", padres.length);
console.log("Cantidad de hijos:", hijos.length);
console.log("Cantidad de nietos:", nietos.length);

console.log("Primer abuelo:", abuelos[0]);
console.log("Primer padre:", padres[0]);
console.log("Primer hijo:", hijos[0]);
console.log("Primer nieto:", nietos[0]);

//array palabras
var palabras = prompt ("escribe palabras separadas por comas");
palabras = palabras.split(",");
console.log ("Primera palabra:", palabras[0])

//array colores
var colores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"]

var color = prompt ("Dinos un color:");
if (colores.includes(color))
{
    console.log("El color", color, "se encuentra en el array.");
  } else {
    console.log("El color", color, "no se encuentra en el array.");
  }

  var numeros = prompt ("Dinos 5 numeros:");