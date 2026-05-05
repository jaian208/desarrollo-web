const Juego= require('../models/juego');
const { validationResult } = require('express-validator');


exports.MostrarFormularioJuegos= async function (req, res) {
    try {
        const categorias = [
            'Acción',
            'Aventura',
            'cooperativo',
            'Deportes',
            'Terror'
        ];
        //Verificar si el usuario es admin
        const UserAdmin1 = req.session.user;
        if (UserAdmin1 && UserAdmin1.rol === 'admin') {
            res.render('formularioJuego/formularioJuego', {
                errores: [],
                datos: {},
                categorias
            });
        }else if(UserAdmin1 && UserAdmin1.rol === 'cliente') {
            res.redirect('/');
        }else{
            res.redirect('/register');
        }
    }catch(error){
     console.log('Usuario no autorizado',error);
     res.status(400).send('Usuario no autorizado');
    }
}

exports.AñadirelJuego = async function (req, res) {

    try {
        const user = req.session.user;

        if (!user || user.rol !== 'admin') {
            return res.status(403).send('No autorizado');
        }

        const errores = validationResult(req);
        let erroresArray = errores.array();

        if (req.fileValidationError) {
            erroresArray.push({ msg: req.fileValidationError });
        }

        if (!req.file && (!req.body.imagen_url || req.body.imagen_url.trim() === '')) {
            erroresArray.push({ msg: 'Debe subir una imagen o URL' });
        }

        const { nombre, descripcion, precio, categoria } = req.body;

        const juegoExistente = await Juego.findOne({
            where: {
                nombre: nombre.trim()
            }
        });

        if (juegoExistente) {
            erroresArray.push({ msg: 'El juego ya existe' });
        }

        if (erroresArray.length > 0) {
            return res.render('formularioJuego/formularioJuego', {
                errores: erroresArray,
                datos: req.body
            });
        }

        let imagen = '/images/home/portada/default-game.png';

        if (req.file) {
            imagen = '/images/home/portada/' + req.file.filename;
        }
        else if (req.body.imagen_url && req.body.imagen_url.trim() !== '') {
            imagen = req.body.imagen_url;
        }

        await Juego.create({
            nombre: nombre.trim(),
            imagen_portada: imagen,
            descripcion,
            precio,
            categoria,
            userId: user.id
        });

        return res.redirect('/');

    } catch (error) {
        console.log('Error al crear juego', error);
        res.status(500).send('Error crítico');
    }
};