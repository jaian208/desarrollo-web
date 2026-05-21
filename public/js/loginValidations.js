window.addEventListener("load", function () {

    const formulario = document.querySelector("#loginForm");

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let ulErrores = document.querySelector(".errores");
        ulErrores.innerHTML = "";
        ulErrores.classList.add("d-none");

        //validacion de email
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            errores.push("Debes ingresar un correo");
            email.classList.add("is-invalid");

        } else if (!regexEmail.test(email.value)) {

            errores.push("Debes ingresar un correo válido");
            email.classList.add("is-invalid");

        } else {

            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        //validacion contraseña

        if (password.value.trim() === "") {

            errores.push("Debes ingresar una contraseña");
            password.classList.add("is-invalid");

        } else if (password.value.length < 8) {

            errores.push("La contraseña debe tener mínimo 8 caracteres");
            password.classList.add("is-invalid");

        } else {

            password.classList.remove("is-invalid");
            password.classList.add("is-valid");
        }

        if (errores.length > 0) {

            e.preventDefault();

            ulErrores.classList.remove("d-none");

            errores.forEach(error => {

                ulErrores.innerHTML += `<li>${error}</li>`;

            });

        }

    });

});