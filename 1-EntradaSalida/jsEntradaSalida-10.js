/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/

// Lucas Emmanuel Gimenez

function mostrarAumento()
{
	var importe;
	var descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe - (importe * 25) / 100;

	document.getElementById("txtIdResultado").value = descuento;
}

/*
Ejercicio 10 bis:
Debemos lograr tomar el importe por ID.value,
transformarlo a entero "parseInt()", luego
mostrar el importe con un decuento ingresado 
por el usuario a través de un prompt en el 
cuadro de texto "txtIdResultado"
*/

// Lucas Emmanuel Gimenez

/*
function mostrarAumento()
{
	var importe;
	var descuento;
	var mensaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	mensaje = "Cuanto descuento queres pobreton: ";
	
	descuento = prompt(mensaje);
	descuento = parseInt(descuento);

	descuento = importe - (importe * descuento) / 100;

	document.getElementById("txtIdResultado").value = descuento;
}
*/