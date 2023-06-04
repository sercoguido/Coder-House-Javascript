
const registrarseForm = document.querySelector(`#registrarseForm`)

registrarseForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    //Traigo los elementos del formulario.
    const nombreUsuario = document.querySelector('#nombreUsuario').value
    const usuarioUsuario = document.querySelector('#usuarioUsuario').value
    const contraseñaUsuario = document.querySelector('#contraseñaUsuario').value
    const contraseñaUsuarioRep = document.querySelector('#contraseñaUsuarioRep').value

    if(contraseñaUsuario.length < 4){//Me fijo que las contraseña sea mayor a 4 caracteres.
        textoValidacion.innerHTML="Contraseña muy corta, debe tener al menos 4 caracteres.";
        textoValidacion.classList.add("usuarioInvalido");
        return;
    } else if (contraseñaUsuario != contraseñaUsuarioRep){//Me fijo que las contraseñas coincidan.
        textoValidacion.innerHTML="Contraseñas no coinciden.";
        textoValidacion.classList.add("usuarioInvalido");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    const siUsuarioRegistrado = usuarios.find(usuario => usuario.usuario === usuarioUsuario)
    if(siUsuarioRegistrado){
        textoValidacion.innerHTML="Ya se encuentra una cuenta registrada con ese Usuario, intente con otro.";
        textoValidacion.classList.add("usuarioInvalido");
    }
    else{
        usuarios.push({nombre: nombreUsuario, usuario: usuarioUsuario, contraseña: contraseñaUsuario}),
        localStorage.setItem(`usuarios`,JSON.stringify(usuarios)),
        alert("Usuario Registrado Correctamente")
        setTimeout(() => location.href = "../index.html", 200)
    }
})