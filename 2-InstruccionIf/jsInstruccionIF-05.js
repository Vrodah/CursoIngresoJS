/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var noTeen;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	noTeen = 'No es adolescente';

	if(edad < 13 || edad > 17)
	{
		alert(noTeen);
	}	
}