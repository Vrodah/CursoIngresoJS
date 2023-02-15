/*
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var mayor;
	var teen;
	var nene;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	mayor = 'Es mayor de edad';
	menor = 'Es menor de edad';
	teen = 'Es adolescente';
	nene = 'Es un ninio';

	if(edad > 17)
	{
		alert(mayor);
	}
	else
	{
		if(edad < 13)
		{
			alert(nene);
		}
		else
		{
			alert(teen);
		}
	}
}