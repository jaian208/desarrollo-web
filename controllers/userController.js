const User= require('../models/user');
const bcrypt=require("bcrypt");

exports.mostrarFormulario = async (req, res) => {
    res.render('register/register');
}

exports.crearUsuario = async (req, res) => {
    try {

        const {nombre, email, password} = req.body;    //Solicitudes para que el usuario llene
        //determinar si el usuario ya existe
        const UsuarioCreado = await User.findOne({
            where:{ email: email}});

        if(UsuarioCreado){
           return res.status(400).send('Erro, usuario ya existente');
        }

        //Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada= await bcrypt.hash(password, salt);

        let rolAsignado= 'cliente';

        //CREDENCIALES DE ADMIN (PROVISIONAL)

        const admins = ['admin@gamezone.com', 'otroadmin@gamezone.com'];
        if (admins.includes(email)) {
            rolAsignado = 'admin';
        }

        //Creamos el usuario
        await User.create({
            nombre: nombre,
            email: email,
            password: passwordEncriptada,
            rol: rolAsignado,
            estado_cuenta: true,
            avatar: '/images/default-avatar.png'

        });
        res.redirect('/login');
    }catch(error){
        console.error('Error crítico al registrar:', error);
        res.status(500).send('Error interno en la base.');
    }
}