/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()

// Lucas Emmanuel Gimenez

// Resolucion por defecto

{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado);

}
*/

// Otra resolucion que dio el profe

function mostrar()
{
	//txtIdNombre
	var miInput;
	miInput = document.getElementById("txtIdNombre").value;
	alert(miInput);
}


/* 

function mostrar()
{
	let miInput;
	miInput = document.getElementById("txtIdNombre").value;
	alert(miInput);

	//miInput = prompt("Dame un texto"); 						//TOMA DATO DE VENTANA EMERGENTE
	
	//miinput = txtIdNombre.value; 								//TOMA VALOR DESDE UN ID DEL DOM
	//miInput = document.getElementById("txtIdNombre").value; 	//TOMA DATO DE UN ELEMENTO DEL DOM
}

*/
