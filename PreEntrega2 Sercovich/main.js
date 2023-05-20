let dineroUsuario = 4500;
let dineroUsuarioDolares = 0;
let tasamensualplazofijo = 0.07;
let cotizacionDolar = 400;



// Inicio Sesión //
let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su clave numérica de 4 dígitos");

while (contraseña != 0000 || contraseña.length != 4){
    if(contraseña.length != 4){
        alert("Cantidad de dígitos incorrecta ¡Su clave debe tener 4 dígitos!"); 
        contraseña = prompt("Ingrese su clave numérica de 4 dígitos");
    }
    else{
    alert("Contraseña Incorrecta, intente nuevamente");
    contraseña = prompt("Ingrese su clave numérica de 4 dígitos");
    }
}

// Corrección formato de Usuario (Primera letra mayus, demás minúscula) //
usuario = usuario[0].toUpperCase() + usuario.substring(1).toLowerCase();

alert(`Bienvenid@ ${usuario} al Home Banking`);





// Funciones dentro del Home Banking //
const ingreso = x => x + dineroUsuario;
const egreso = x => dineroUsuario - x;
const gananciaplazofijo = x => x * tasamensualplazofijo ;





// Dentro del Home Banking //
eleccion = prompt(`Estimado/a ${usuario}. Escriba la abreviatura de la cuenta a ingresar, siendo: "ARS" Cuenta en Pesos y "USD" Cuenta en Dólares y "SALIR" Para cerrar sesion`);
// Pasando cualquier seleccion a MAYUS //
eleccion = eleccion.toUpperCase();

while (eleccion != "SALIR"){

    switch (eleccion){



// CUENTA EN PESOS : //

        case "ARS":

            eleccionPesos = prompt(`- CUENTA PESOS - Escriba el número de la operación que quiera realizar: 0 CONSULTAR SALDO ; 1 INGRESO DINERO ; 2 EGRESO DINERO ; 3 PLAZO FIJO ; 4 VOLVER MENÚ PRINCIPAL`);

        while (eleccionPesos != "4"){

            switch (eleccionPesos){

                case "0":
                    alert(`En tu cuenta hay $ ${dineroUsuario}`)
                    break;
        
                case "1":
                    ingresar = parseInt(prompt(`En tu cuenta hay $ ${dineroUsuario}, escriba el monto a ingresar`));
                    if (ingresar <= 0){
                        alert(`Ingreso No Válido, no puedes ingresar $` + ingresar)
                    }else{
                    dineroUsuario = ingreso (ingresar);
                    alert(`Ahora hay ` + dineroUsuario)}
                    break;
        
                case "2":
                    egresar = parseInt(prompt(`En tu cuenta hay $ ${dineroUsuario}, escriba el monto a retirar`));
                    if (egresar <= dineroUsuario && egresar > 0){
                        dineroUsuario = egreso (egresar);
                        if (egresar == dineroUsuario){
                            alert(`Retiraste todo tu dinero, ahora no quedan fondos en la cuenta. Vuelve a ingresar dinero para poder seguir disfrutando como quieras !`)
                        }else{
                            alert(`Ahora hay ` + dineroUsuario)}
                    }else{
                        alert(`No puedes retirar esa cantidad.`)    
                    }
                    break;
        
                case "3":
                    montoplazofijo = parseInt(prompt(`Ingrese monto para realizar plazo fijo a 30 días (Tasa Mensual del 7%) TNA 84%`));
                    if (montoplazofijo <= dineroUsuario && montoplazofijo >= 100){
                        dineroUsuario = dineroUsuario + gananciaplazofijo(montoplazofijo);
                        alert(`Dentro de 30 días obtendrás $`+ (montoplazofijo + parseInt(gananciaplazofijo(montoplazofijo))) + ` con un rendimiento de $`+ Math.trunc(gananciaplazofijo(montoplazofijo)))
                        alert(`Confirmaste el plazo fijo y pasaron los 30 días, ya tienes los rendimientos ( $ ` + Math.trunc(gananciaplazofijo(montoplazofijo)) + ` ) acreditados en tu cuenta`);
                    }else{
                        alert(`No puedes realizar un plazo fijo con ese monto, tu dinero en cuenta es de $${dineroUsuario} y el monto mínimo para realizar un plazo fijo es de $100`) 
                    }

                    break;
                }

                eleccionPesos = prompt(`- CUENTA PESOS - Escriba el número de la operación que quiera realizar: 0 CONSULTAR SALDO ; 1 INGRESO DINERO ; 2 EGRESO DINERO ; 3 PLAZO FIJO ; 4 VOLVER MENÚ PRINCIPAL`);
            }break;




// CUENTA EN DÓLARES: //

        case "USD":

        eleccionDolares = prompt(` - CUENTA DÓLARES - Escriba el número de la operación que quiera realizar: 0 CONSULTAR SALDO ; 1 COMPRA DÓLARES ; 2 EGRESO DÓLARES ; 3 VOLVER MENÚ PRINCIPAL`);

        while (eleccionDolares != "3"){

            switch (eleccionDolares){

                case "0":
                    alert(`En tu cuenta hay $ ${dineroUsuarioDolares} Dolares`)
                    break;

                case "1":
                    compraPesosADolares = prompt(`En tu cuenta hay $ ${dineroUsuario} ARS .Y la cotización del dolar para la compra es de $${cotizacionDolar} ¿Cuantos dólares deseas comprar?`);
                        compraPesosADolares = compraPesosADolares * cotizacionDolar;
                    if (compraPesosADolares > 0 && compraPesosADolares >= cotizacionDolar && compraPesosADolares <= dineroUsuario){
                        dineroUsuario = dineroUsuario - compraPesosADolares;
                        nuevoIngresoDolares = compraPesosADolares / cotizacionDolar ;
                        dineroUsuarioDolares = dineroUsuarioDolares + nuevoIngresoDolares;
                        alert(`Compraste ${nuevoIngresoDolares} Dólares por el valor de ${compraPesosADolares} Pesos`)
                }

                else {alert("No es posible realizar esa operación")}
                break;
            
            
        default:
            alert("ERROR: Operacion No Válida, Intente con uno de los números.");
                }

                eleccionDolares = prompt(` - CUENTA DÓLARES - Escriba el número de la operación que quiera realizar: 0 CONSULTAR SALDO ; 1 COMPRA DÓLARES ; 2 EGRESO DÓLARES ; 3 VOLVER MENÚ PRINCIPAL`);
            }
    }


    eleccion = prompt(`Estimado/a ${usuario}. Escriba la abreviatura de la cuenta a ingresar, siendo: "ARS" Cuenta en Pesos y "USD" Cuenta en Dólares y "SALIR" Para cerrar sesion`);
    // Pasando cualquier seleccion a MAYUS //
    eleccion = eleccion.toUpperCase();
}

alert(`Chau Sr/Sra: ${usuario}, lo esperamos pronto !`);












// :::::::::: Elementos Para Segunda Entrega :::::::::: //


///Constructor De Los Movimientos:
class Movimiento{
    constructor(id,moneda,accion,monto){
        this.id = id;
        this.moneda = moneda;
        this.accion = accion;
        this.monto = monto;
    }
}


///Creando El Array:
const movimientos = [];

///Creando Los Movimientos:
const movimiento1 = new Movimiento (1,"ARS","Ingreso",1000);
const movimiento2 = new Movimiento (2,"ARS","Egreso",500);
const movimiento3 = new Movimiento (3,"USD","Ingreso",200);
const movimiento4 = new Movimiento (4,"ARS","Ingreso",2000);
const movimiento5 = new Movimiento (5,"USD","Ingreso",100);
const movimiento6 = new Movimiento (6,"USD","Egreso",100);


///Pusheandolos Al Array:
movimientos.push (movimiento1);
movimientos.push (movimiento2);
movimientos.push (movimiento3);
movimientos.push (movimiento4);
movimientos.push (movimiento5);
movimientos.push (movimiento6);


//Muestreo De Todos Los Movimientos Que Se Realizaron Dependiendo La Moneda:

eleccionMoneda = prompt(`Elija la moneda en la que quiere ver todos sus movimientos (ARS) o (USD) o "SALIR".`).toUpperCase();

while (eleccionMoneda != "SALIR"){

if (eleccionMoneda == "ARS"){
    const encontradosPesos = movimientos.filter((item) => item.moneda == "ARS");
    encontradosPesos.forEach((item) => {
        let mensaje = `
        ID: ${item.id}
        ${item.accion} de $${item.monto} ${item.moneda}
        `
    alert(mensaje);
    });

} else if (eleccionMoneda == "USD"){
    const encontradosDolares = movimientos.filter((item) => item.moneda == "USD");
    encontradosDolares.forEach((item) => {
        let mensaje = `
        ID: ${item.id}
        ${item.accion} de $${item.monto} ${item.moneda}
        `
    alert(mensaje);
    });
}

else {alert("Moneda no reconocida")};

eleccionMoneda = prompt(`Elija la moneda en la que quiere ver todos sus movimientos (ARS) o (USD) o "SALIR".`).toUpperCase();

} 
alert("Hasta Luego...")






