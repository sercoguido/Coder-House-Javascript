//Registro el usuario registrado
let usuarioRegistrado = localStorage.getItem("usuarioIngresado");
const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const nombreUsuarioRegistrado = usuarios.find(usuario => usuario.usuario === usuarioRegistrado)
const nombreUsuario = nombreUsuarioRegistrado.nombre;


//Saludo con el nombre registrado
let textoSaludo = document.getElementById("textoBienvenida");
textoSaludo.innerHTML = `${nombreUsuario}`;



//Cerrar Sesion
let cerrarSesion = document.getElementById ("botonCerrarSesion");

cerrarSesion.addEventListener ("click" , () =>  {
    setTimeout(() => location.href = "../index.html", 200)
});








