/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

// Lucas Emmanuel Gimenez

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var cantAlambre;
	var mensaje;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	perimetro = (largo + ancho) * 2;

	cantAlambre = perimetro * 3;

	mensaje = 'Se debe comprar ' + cantAlambre + ' metros de alambre';

	alert(mensaje);
}

function Circulo () 
{
	var radio;
	var perimetro;
	const PI = 3.1416;
	var cantAlambre;
	var mensaje;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);

	perimetro = radio * PI * 2; 
 
	cantAlambre = perimetro * 3;
	cantAlambre = cantAlambre.toFixed(2);

	mensaje = 'Se debe comprar ' + cantAlambre + ' metros de alambre';

	alert(mensaje);
}

function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;
	var mensaje;

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);

	area = largo * ancho;

	cemento = area * 2;

	cal = area * 3;

	mensaje = 'Para un contrapiso de ' + area + ' m2 se deben comprar ' + cemento + ' bolsas de cemento y ' + cal + ' bolsas de cal';

	alert(mensaje);
}