window.addEventListener("load", function () {

    const formulario = document.querySelector("#profileForm");

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let nombre = document.querySelector("#nombre");
        let email = document.querySelector("#email");
        let avatar = document.querySelector("#fileInput");

        let ulErrores = document.querySelector(".errores");

        ulErrores.innerHTML = "";
        ulErrores.classList.add("d-none");

        //validar nombre

        if (nombre.value.trim() === "") {

            errores.push("Debes ingresar un nombre");

        } else if (nombre.value.trim().length < 3) {

            errores.push("El nombre debe tener mínimo 3 caracteres");
        }

        // validar email

        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            errores.push("Debes ingresar un correo");

        } else if (!regexEmail.test(email.value)) {

            errores.push("Debes ingresar un correo válido");
        }

        // validar avatar

        let extensionesPermitidas = /(\.jpg|\.jpeg|\.png|\.gif|\.webp)$/i;

        if (avatar.value !== "") {

            if (!extensionesPermitidas.test(avatar.value)) {

                errores.push("El avatar debe ser JPG, PNG, GIF o WEBP");
            }
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