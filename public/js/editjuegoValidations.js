window.addEventListener("load", function () {

    const formulario = document.querySelector("#editGameForm");

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let nombre = document.querySelector("#nombre");
        let categoria = document.querySelector("#categoria");
        let precio = document.querySelector("#precio");
        let descripcion = document.querySelector("#descripcion");
        let imagenUrl = document.querySelector("#imgInput");
        let imagenArchivo = document.querySelector("#fileInput");
        let ulErrores = document.querySelector(".errores");
        ulErrores.innerHTML = "";
        ulErrores.classList.add("d-none");

        //validar nombre
        if (nombre.value.trim() === "") {

            errores.push("Debes escribir el nombre del juego");
        }

        //validar categorias
        if (categoria.value === "") {
            errores.push("Debes seleccionar una categoría");
            categoria.classList.add("is-invalid");
        } else {
            categoria.classList.remove("is-invalid");
            categoria.classList.add("is-valid");
        }

        //validar precio
        if (precio.value === "" || precio.value <= 0) {
            errores.push("El precio debe ser mayor a 0");
            precio.classList.add("is-invalid");
        } else {
            precio.classList.remove("is-invalid");
            precio.classList.add("is-valid");
        }
        //validar descripcion
        if (descripcion.value.trim().length < 20) {

            errores.push("La descripción debe tener mínimo 20 caracteres");
        }

        //validar iamgen
        if (imagenArchivo.value !== "") {
            if (!extensionesPermitidas.test(imagenArchivo.value)) {
                errores.push("La imagen debe ser JPG, PNG, GIF o WEBP");
                imagenArchivo.classList.add("is-invalid");
            } else {
                imagenArchivo.classList.remove("is-invalid");
                imagenArchivo.classList.add("is-valid");
            }
        }

        if (imagenUrl.value.trim() !== "") {
            let urlValida = /^(https?:\/\/.*|\/images\/.*)\.(png|jpg|jpeg|gif|webp)$/i;
            if (!urlValida.test(imagenUrl.value)) {
                errores.push("La URL de imagen no es válida");
                imagenUrl.classList.add("is-invalid");

            } else {
                imagenUrl.classList.remove("is-invalid");
                imagenUrl.classList.add("is-valid");
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