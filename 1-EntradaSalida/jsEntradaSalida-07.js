/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
*/ 

// Lucas Emmanuel Gimenez


function sumar()
{	
	var num1;
	var num2;
	var resultado;
	var mensaje;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultado = num1 + num2;
	mensaje = "La suma es " + resultado;
	alert(mensaje);
}

function restar()
{
	var num1;
	var num2;
	var resultado;
	var mensaje;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultado = num1 - num2;
	mensaje = "La resta es " + resultado;
	alert(mensaje);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;
	var mensaje;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultado = num1 * num2;
	mensaje = "La multiplicacion es " + resultado;
	alert(mensaje);
}

function dividir()
{
	var num1;
	var num2;
	var resultado;
	var mensaje;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resultado = num1 / num2;
	mensaje = "La division es " + resultado;
	alert(mensaje);
}