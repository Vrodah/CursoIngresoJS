/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var estadoCivil;
	var solteroMayor;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	solteroMayor = 'Es soltero y no es menor';

	if(edad > 17 && estadoCivil === 'Soltero')
	{
		alert(solteroMayor);
	}
}