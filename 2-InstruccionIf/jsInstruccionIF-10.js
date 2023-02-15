/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var numsRandom;
	var excelente;
	var aprobado;
	var desaprobado;

	numsRandom = Math.random() * 10;

	numsRandom = numsRandom.toFixed(0);

	excelente = 'Tu nota es ' + numsRandom + ': EXCELENTE';
	aprobado = 'Tu nota es ' + numsRandom + ': APROBO';
	desaprobado = 'Tu nota es ' + numsRandom + ': Vamos, la proxima se puede';

	if(numsRandom > 4)
	{
		if(numsRandom < 9)
		{
			alert(aprobado);
		}
		else
		{
			alert(excelente);
		}
	}
	else
	{
		alert(desaprobado);
	}
}