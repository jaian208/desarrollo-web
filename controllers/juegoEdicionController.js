const Juego = require('../models/Juego');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

// ================== MOSTRAR FORM ==================
exports.MostrarFormularioEdicion = async (req, res) => {
    try {
        const UserAdmin1 = req.session.user;
        const idJuego = req.params.id;
        const categorias = [
            'Acción',
            'Aventura',
            'cooperativo',
            'Deportes',
            'Terror'
        ];

        if (!UserAdmin1) return res.redirect('/login');

        const juego = await Juego.findByPk(idJuego);
        if (!juego) return res.redirect('/');

        // Permiso: dueño o admin
        if (juego.userId !== UserAdmin1.id && UserAdmin1.rol !== 'admin') {
            return res.redirect('/');
        }

        res.render('formularioEdicion/formularioEdicion', {
            juego,
            errores: [],
            datos: {},
            categorias
        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al cargar formulario');
    }
};

exports.EditarJuego = async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) return res.status(403).send('No autorizado');

        const idJuego = req.params.id;
        const juego = await Juego.findByPk(idJuego);

        if (!juego) {
            return res.status(404).send('Juego no encontrado');
        }

        if (juego.userId !== user.id && user.rol !== 'admin') {
            return res.status(403).send('No puedes editar este juego');
        }

        const errores = validationResult(req);
        let erroresArray = errores.array();

        if (req.fileValidationError) {
            erroresArray.push({ msg: req.fileValidationError });
        }

        if (erroresArray.length > 0) {
            return res.render('formularioEdicion/formularioEdicion', {
                errores: erroresArray,
                datos: req.body,
                juego
            });
        }

        const { nombre, precio, descripcion, categoria } = req.body;

        let imagen = juego.imagen_portada;

        if (req.file) {
            if (juego.imagen_portada && juego.imagen_portada.startsWith('/images/')) {

                const rutaImagen = path.join(__dirname, '..', 'public', juego.imagen_portada);

                if (fs.existsSync(rutaImagen)) {
                    fs.unlinkSync(rutaImagen);
                }
            }

            imagen = '/images/home/portada/' + req.file.filename;
        }
        else if (req.body.imagen_portada) {
            imagen = req.body.imagen_portada;
        }

        if (req.body.imagen_portada) {
            imagen = req.body.imagen_portada;
        }

        juego.nombre = nombre;
        juego.precio = precio;
        juego.descripcion = descripcion;
        juego.categoria = categoria;
        juego.imagen_portada = imagen;

        await juego.save();

        res.redirect(`/comprar/${juego.id}`);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al editar el juego');
    }
};

exports.eliminarJuego = async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) return res.status(403).send('No autorizado');

        const juego = await Juego.findByPk(req.params.id);
        if (!juego) return res.status(404).send('Juego no encontrado');

        if (juego.userId !== user.id && user.rol !== 'admin') {
            return res.status(403).send('No puedes eliminar este juego');
        }

        await juego.destroy();

        res.redirect('/perfil');

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar juego');
    }
};