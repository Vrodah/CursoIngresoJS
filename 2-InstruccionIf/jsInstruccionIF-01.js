/* 
Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita".
*/

// Lucas Emmanuel Gimenez

function mostrar() 
{
	var edad;
	var mensaje;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	mensaje = 'niña bonita';

	if(edad === 15) 
	{
		alert(mensaje);
	}
}