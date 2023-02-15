/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var numsRandom;

	numsRandom = Math.random() * 10;

	numsRandom = numsRandom.toFixed(0);

	alert(numsRandom);
}