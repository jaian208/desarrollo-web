window.addEventListener("load", function () {

    const formulario = document.querySelector("#registerForm");

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let nombre = document.querySelector("#nombre");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let confirmPassword = document.querySelector("#confirmPassword");
        let ulErrores = document.querySelector(".errores");
        ulErrores.innerHTML = "";
        ulErrores.classList.add("d-none");

        // validar nombre
        if (nombre.value.trim() === "") {

            errores.push("Debes ingresar un nombre");
            nombre.classList.add("is-invalid");

        } else if (nombre.value.trim().length < 3) {

            errores.push("El nombre debe tener mínimo 3 caracteres");
            nombre.classList.add("is-invalid");

        } else {

            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }

        // validar email
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

        // validar contraseña
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

        //valdiar confirmacion de contraseña
        if (confirmPassword.value.trim() === "") {

            errores.push("Debes confirmar la contraseña");
            confirmPassword.classList.add("is-invalid");

        } else if (confirmPassword.value !== password.value) {

            errores.push("Las contraseñas no coinciden");
            confirmPassword.classList.add("is-invalid");

        } else {

            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");
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