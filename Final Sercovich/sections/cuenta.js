//Registro el usuario registrado
let usuarioRegistrado = localStorage.getItem("usuarioIngresado");
const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const nombreUsuarioRegistrado = usuarios.find(usuario => usuario.usuario === usuarioRegistrado)



//Saludo con el nombre registrado.
let nombreUsuario = nombreUsuarioRegistrado.nombre;
nombreUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1).toLowerCase();
let textoSaludo = document.getElementById("textoBienvenida");
textoSaludo.innerHTML = `${nombreUsuario}`;



//Cerrar Sesion
let cerrarSesion = document.getElementById ("botonCerrarSesion");

cerrarSesion.addEventListener ("click" , () =>  {
    setTimeout(() => location.href = "../index.html", 200)
});








