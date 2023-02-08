/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

// Lucas Emmanuel Gimenez

function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var mensaje;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);

    resultado = precioUno + precioDos + precioTres;
    mensaje = ('La suma es ') + resultado;

    alert(mensaje);
}

function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var mensaje;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);

    resultado = (precioUno + precioDos + precioTres) / 3;
    mensaje = ('El promedio es ') + resultado;

    alert(mensaje);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var mensaje;
    var iva;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);

    iva = (precioUno + precioDos + precioTres) * 21 / 100

    resultado = precioUno + precioDos + precioTres + iva;

    mensaje = ('El precio final con la IVA es ') + resultado;

    alert(mensaje);
}