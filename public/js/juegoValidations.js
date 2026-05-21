window.addEventListener("load", function () {

    const formulario = document.querySelector("#gameForm");

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let nombre = document.querySelector("#nombre");
        let categoria = document.querySelector("#categoria");
        let precio = document.querySelector("#precio");
        let descripcion = document.querySelector("#descripcion");
        let imagenArchivo = document.querySelector("#imagen_portada");
        let imagenUrl = document.querySelector("#imgInput");
        let ulErrores = document.querySelector(".errores");
        ulErrores.innerHTML = "";
        ulErrores.classList.add("d-none");


        // validar nombre del juego
        if (nombre.value.trim() === "") {

            errores.push("Debes escribir el nombre del juego");

            nombre.classList.add("is-invalid");

        } else {

            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }


        // validar categoria

        if (categoria.value === "") {

            errores.push("Debes seleccionar una categoría");

        }


        // validar precio

        if (precio.value === "" || precio.value <= 0) {

            errores.push("El precio debe ser mayor a 0");

            precio.classList.add("is-invalid");

        } else {

            precio.classList.remove("is-invalid");
            precio.classList.add("is-valid");
        }

        // validar descripcion

        if (descripcion.value.trim().length < 20) {

            errores.push("La descripción debe tener mínimo 20 caracteres");

        }

        //validar imagen portada
        let extensionesPermitidas = /(\.jpg|\.jpeg|\.png|\.gif|\.webp)$/i;

        if (
            imagenArchivo.value === "" &&
            imagenUrl.value.trim() === ""
        ) {
            errores.push("Debes subir una imagen o ingresar una URL");
        }

        if (imagenArchivo.value !== "") {
            if (!extensionesPermitidas.test(imagenArchivo.value)) {
                errores.push("La imagen debe ser JPG, PNG, GIF o WEBP");
            }
        }

        if (imagenUrl.value.trim() !== "") {
            let urlValida = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;

            if (!urlValida.test(imagenUrl.value)) {
                errores.push("La URL de imagen no es válida");
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