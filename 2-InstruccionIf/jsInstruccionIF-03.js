/* 
Al ingresar una edad debemos informar si la persona es 
mayor de edad, sino informar que es un menor de edad.
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var mayor;
	var menor;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	mayor = 'Es mayor de edad';
	menor = 'Es menor de edad';

	if(edad > 17)
	{
		alert(mayor);
	}
	else
	{
		alert(menor);
	}
}