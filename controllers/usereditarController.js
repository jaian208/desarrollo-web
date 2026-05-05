const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.mostrarEditarPerfil = async (req, res) => {
    const usuario = await User.findByPk(req.session.user.id);

    res.render('perfil/editarPerfil', {
        errores: [],
        usuario
    });
};

exports.editarPerfil = async (req, res) => {
    try {
        const errores = validationResult(req);
        let erroresArray = errores.array();

        if (req.fileValidationError) {
            erroresArray.push({ msg: req.fileValidationError });
        }

        const usuario = await User.findByPk(req.session.user.id);

        if (erroresArray.length > 0) {
            return res.render('perfil/editarPerfil', {
                errores: erroresArray,
                usuario: req.body
            });
        }

        const existe = await User.findOne({
            where: { email: req.body.email }
        });

        if (existe && existe.id !== usuario.id) {
            return res.render('perfil/editarPerfil', {
                errores: [{ msg: 'El correo ya está en uso' }],
                usuario: req.body
            });
        }

        let avatar = usuario.avatar;

        if (req.file) {
            avatar = '/images/home/avatars/' + req.file.filename;
        }

        await usuario.update({
            nombre: req.body.nombre.trim(),
            email: req.body.email.trim().toLowerCase(),
            avatar
        });

        req.session.user.avatar = avatar;
        req.session.user.nombre = req.body.nombre;

        res.redirect('/perfil');

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al editar perfil');
    }
};