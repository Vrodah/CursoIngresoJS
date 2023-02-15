/* 
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var teen;
	var noTeen;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	teen = 'Es adolescente';
	noTeen = 'No es adolescente';

	if(edad > 12)
	{
		if(edad < 18)
		{
			alert(teen);
		}
		else
		{
			alert(noTeen);
		}
	}
	else
	{
		alert(noTeen);
	}
}