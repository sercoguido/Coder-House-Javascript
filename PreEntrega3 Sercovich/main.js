// Inicio Sesion




let textoValidacion = document.getElementById("textoValidacion"); // Texto si es Válido o No


const loginForm = document.querySelector(`#formularioIngreso`)

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const usuarioIngreso = document.querySelector('#usuario').value
    const contraseñaIngreso = document.querySelector('#contraseña').value

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    const siUsuarioRegistrado = usuarios.find(usuario => usuario.usuario === usuarioIngreso && usuario.contraseña === contraseñaIngreso)

    localStorage.setItem("usuarioIngresado", usuarioIngreso )

    if (!siUsuarioRegistrado) {
    textoValidacion.innerHTML="Usuario y/o contraseña incorrectos";
    textoValidacion.classList.add("usuarioInvalido");
    }

    else
    {
    setTimeout(() => location.href = "./sections/cuenta.html", 500);
    textoValidacion.innerHTML="Ingreso Exitoso !";
    textoValidacion.classList.add("usuarioValido");
    }

})












///////////////////


// // Recuperar movimientos almacenados en el LocalStorage
// let movimientosStorage = localStorage.getItem("movimientos");
// let movimientos = JSON.parse(movimientosStorage) || []; 
// // Si no hay movimientos almacenados, se inicializa como un array vacío

// // Función para agregar nuevos "Movimientos"
// const crear = (accion, monto) => {
//     let nuevoMovimiento = {
//     id: movimientos.length +1,
//     accion: accion,
//     monto: monto,
//     };

//     movimientos.push(nuevoMovimiento);
//     localStorage.setItem("movimientos", JSON.stringify(movimientos));
// };

// let accion = prompt("Ingrese la acción (Extracción o Ingreso)");
// let monto = prompt("Ingrese el monto");

// crear(accion, monto);