/* 
Al ingresar una edad debemos informar 
solo si la persona es mayor de edad.
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	mensaje = 'Eres mayor de edad';

	if(edad > 17) 
	{  
		alert(mensaje);
	}	
}