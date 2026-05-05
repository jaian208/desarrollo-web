const User= require('../models/user');
const bcrypt=require("bcrypt");
const { validationResult } = require('express-validator');

exports.mostrarFormulario = async (req, res) => {
    res.render('register/register', {
        errores: [],
        datos: {}
    });
}

exports.crearUsuario = async (req, res) => {
    try {
        const errores = validationResult(req);
        let erroresArray = errores.array();

        if (req.fileValidationError){
            erroresArray.push({msg:req.fileValidationError});
        }

        if (erroresArray.length > 0) {
            return res.render('register/register', {
                errores: erroresArray,
                datos: req.body
            });
        }

        const {nombre, email, password} = req.body;    //Solicitudes para que el usuario llene
        //determinar si el usuario ya existe

        const emailLimpio = email.trim().toLowerCase();

        const UsuarioCreado = await User.findOne({
            where:{ email: emailLimpio }});

        if(UsuarioCreado){
            return res.render('register/register', {
                errores: [{ msg: 'Usuario ya existe' }],
                datos: req.body
            });
        }

        //Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada= await bcrypt.hash(password, salt);

        let rolAsignado= 'cliente';

        //CREDENCIALES DE ADMIN (PROVISIONAL)

        const admins = ['admin@gamezone.com', 'otroadmin@gamezone.com'];
        if (admins.includes(emailLimpio)) {
            rolAsignado = 'admin';
        }

        let avatarPath = '/images/home/avatars/default-avatar.png';

        if (req.file) {
            avatarPath = '/images/home/avatars/' + req.file.filename;
        }

        //Creamos el usuario
        await User.create({
            nombre: nombre.trim(),
            email: emailLimpio,
            password: passwordEncriptada,
            rol: rolAsignado,
            estado_cuenta: true,
            avatar: avatarPath
        });
        res.redirect('/login');
    }catch(error){
        console.error('Error crítico al registrar:', error);
        res.status(500).send('Error interno en la base.');
    }
}