/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/

// Lucas Emmanuel Gimenez

function mostrarAumento()
{
	var importe;
	var aumento;
	
	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);

	aumento = (importe * 10) / 100 + importe;

	document.getElementById("txtIdResultado").value = aumento;
}



/* 
Ejercicio 9 bis: 
Debemos lograr tomar el importe por ID.value, transformarlo 
a entero "parseInt()", luego mostrar el importe con un aumento
ingresado por el usuario a través de un prompt. en el cuadro
de texto "txtIdResultado"
*/

// Lucas Emmanuel Gimenez

/*
function mostrarAumento()
{
	var importe;
	var aumento;
	var mensaje;

	importe = document.getElementById("txtIdSueldo").value;
	importe = parseInt(importe);

	mensaje = "Cuanto aumento queres pobreton: ";

	aumento = prompt(mensaje);
	aumento = parseInt(aumento);

	// No entendi si el aumento que pide es por porcentaje (como en el ejercicio original)
	// o si es solo sumarle la cantidad que el usuario elija, lo hago de las dos formas
	// por las dudas y dejo comentado una
	
	aumento = (importe * aumento) / 100 + importe;

	// aumento = importe + aumento;

	document.getElementById("txtIdResultado").value = aumento;
}
*/