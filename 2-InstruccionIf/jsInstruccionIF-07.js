/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var edad;
	var estadoCivil;
	var soloSolin;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	soloSolin = 'Es muy pequeño para NO ser soltero';
	
	if(edad < 18 && estadoCivil != 'Soltero')
	{
		alert(soloSolin);
	}
}