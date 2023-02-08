/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

// Lucas Emmanuel Gimenez

function mostrar()
{
	var name;
	name = prompt("Ingrese un nombre: ");
	document.getElementById("txtIdNombre").value = name;
	
	//console.log(name);
}