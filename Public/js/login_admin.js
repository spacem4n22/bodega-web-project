const form = document.getElementById("loginAdminForm");

const usuarioInput =
    document.getElementById("usuario");

const passwordInput =
    document.getElementById("password");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    fetch("/api/usuarios")

    .then(res => res.json())

    .then(usuarios => {

        const usuarioValido = usuarios.find(user => {

            return (

                user.usuario === usuarioInput.value &&

                user.password === passwordInput.value

            );

        });

        if(usuarioValido){

            alert("Bienvenido administrador");

            localStorage.setItem("adminLogin", "true");

            window.location.href =
                "admin.html";

        }

        else{

            alert("Usuario o contraseña incorrectos");

        }

    })

    .catch(error => {

        console.log(error);

    });

});