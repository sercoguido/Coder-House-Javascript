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

    !siUsuarioRegistrado ? (
        textoValidacion.innerHTML = "Usuario y/o contraseña incorrectos",
        textoValidacion.classList.add("usuarioInvalido"),
        Swal.fire('Error!', 'Usuario y/o contraseña incorrectos!', 'error')
    ) : (
        Swal.fire('Excelente!', 'Ingreso Exitoso', 'success'),
        setTimeout(() => location.href = "./sections/cuenta.html", 1000)
    );

})











//  FETCH - API EXTERNA

function obtenetUsuario(){
    const apiurl = 'https://randomuser.me/api/';
    fetch ( apiurl )
    .then(res=>res.json())
    .then(resJson => {
        const usuario = resJson.results[0]
        const nombre = usuario.name;
        const imagen = usuario.picture.medium;
        mostrarUsuario(nombre, imagen)
    })
    .catch(error=>error)
}

obtenetUsuario()

function mostrarUsuario(nombre , imagen){

    const app = document.getElementById("app")
    app.innerHTML=`
    <div>
    <img class="imagenApp" src=${imagen} alt="Foto de usuario">
    </div>
    <h3 class="nombreApp"> ${nombre.first} ${nombre.last} </h3>
    `

}









