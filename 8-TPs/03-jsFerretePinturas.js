/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//Lucas Emmanuel Gimenez

function FahrenheitCentigrados () 
{
	var temperatura;
	var centigrados;
	var mensaje;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);

	centigrados = (temperatura - 32) / 1.8;
	
	mensaje = temperatura + ' grados fahrenheit son ' + centigrados + ' grados centigrados';

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheit;
	var mensaje;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);

	fahrenheit = temperatura * 1.8 + 32;

	mensaje = temperatura + ' grados centigrados son ' + fahrenheit + ' grados fahrenheit';

	alert(mensaje);