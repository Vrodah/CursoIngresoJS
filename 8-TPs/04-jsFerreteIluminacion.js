/*4.
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

// Lucas Emmanuel Gimenez


/*
function CalcularPrecio() 
{


 	var cantLamparas;

    var marca;

    var total;

    var descuento;

    var precioDescuento;

    var IIBB;


    cantLamparas = document.getElementById('txtIdCantidad').value; 
    cantLamparas = parseInt(cantLamparas);

    marca = document.getElementById('Marca').value;

    total = cantLamparas * 35;

    
    if(cantLamparas > 5)
    {
        //DESCUENTO 50%
        descuento = 50;
    }
    else
    {
        if(cantLamparas === 5)
        {
            if(marca === 'ArgentinaLuz')
            {
                //DESCUENTO 40% 
                descuento = 40;
            }
            else
            {
                //DESCUENTO 30%
                 descuento = 30;
            }
        }
        else
        {
            if(cantLamparas === 4 && marca === 'ArgentinaLuz' || cantLamparas === 4 && marca === 'FelipeLamparas')
            {
                //DESCUENTO 25%
                descuento = 25;
            }
            else
            {
                //DESCUENTO 20%
                descuento = 20;
                if(cantLamparas === 3)
                {
                    if(marca === 'ArgentinaLuz')
                    {
                        //DESCUENTO 15%
                        descuento = 15;
                    }
                    else
                    {
                        if(marca === 'FelipeLamparas')
                        {
                            //DESCUENTO 10%
                            descuento = 10;
                        }
                        else
                        {
                            //DESCUENTO 5%
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }    

    
    precioDescuento = total - (total * descuento) / 100;
    document.getElementById('txtIdprecioDescuento').value = precioDescuento;

    IIBB = (precioDescuento * 10) / 100 + precioDescuento;

    if(precioDescuento > 120)
    {
        alert('IIBB Usted pago: ' + IIBB);
    }
}
*/



/*4.
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

// Lucas Emmanuel Gimenez

function CalcularPrecio()
{
    var marca;
    var cantLamparas;
    var PRECIO;
    var total;
    var descuento;
    var iibb;


    marca = document.getElementById('Marca').value;

    cantLamparas = document.getElementById('txtIdCantidad').value; 
    cantLamparas = parseInt(cantLamparas);

    PRECIO = 35;

    total = PRECIO * cantLamparas;


    if(marca != 'ArgentinaLuz' && marca != 'FelipeLamparas')
    {
        if(cantLamparas === 5)
        {
            //DESCUENTO 30%
            descuento = 30;
        }
        else
        {
            if(cantLamparas === 4)
            {
                //DESCUENTO 20%
                 descuento = 20;
            }
            else
            {
                if(cantLamparas === 3)
                {
                    //DESCUENTO 
                    descuento = 5;
                }
            }
        }
    }



    if(marca === 'ArgentinaLuz')
    {
        if(cantLamparas === 5)
        {
            //DESCUENTO 40%
            descuento = 40;
        }
        else
        {
            if(cantLamparas === 3)
            {
                //DESCUENTO 15%
                descuento = 15;
            }
        }
    }


    if(marca === 'FelipeLamparas')
    {
        if(cantLamparas === 5)
        {
            //DESCUENTO 30%
            descuento = 30;
        }
        else
        {
            if(cantLamparas === 3)
            {
                //DESCUENTO 10%
                descuento = 10;
            }
        }
    }


    if(marca === 'ArgentinaLuz' || marca === 'FelipeLamparas')
    {
        if(cantLamparas === 4)
        {
            //DESCUENTO 25%
            descuento = 25;
        }
    }


    if(marca != 'ArgentinaLuz' || marca != 'FelipeLamparas' || marca === 'ArgentinaLuz' || marca === 'FelipeLamparas')
    {
        if(cantLamparas === 1)
        {
            //SIN DESCUENTO
            descuento = 0;
        }
        else
        {
            if(cantLamparas === 2)
            {
                //SIN DESCUENTO
                descuento = 0;
            }
            else
            {
                //DESCUENTO 50%
                descuento = 50;
            }
        }
    }


    precioDescuento = total - (total * descuento) / 100;
    document.getElementById('txtIdprecioDescuento').value = precioDescuento;

    iibb = precioDescuento + (precioDescuento * 10) / 100;

    if(precioDescuento > 120)
    {
        alert('IIBB Usted pago: ' + iibb);
    }
}
