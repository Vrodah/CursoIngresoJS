/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
*/

// Lucas Emmanuel Gimenez

function mostrar()
{	
	var name;
	var age;
	var mensaje;
	name = document.getElementById("txtIdNombre").value;	
	age = document.getElementById("txtIdEdad").value;
	mensaje = ("Usted se llama " + name + " y tiene " + age + " anios");
	alert(mensaje);
}