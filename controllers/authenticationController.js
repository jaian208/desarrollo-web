const User = require('../models/user');
const bcrypt = require("bcrypt");
const Juego = require('../models/juego');
const {promisify} = require("util");
const { validationResult } = require('express-validator');


//Renderizar el login
exports.mostrarLogin = async (req, res) => {
    res.render('login/login', {
        errores: [],
        datos: {}
    });
}


exports.AutenticarLogin = async (req, res) => {
    try {

        const errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render('login/login', {
                errores: errores.array(),
                datos: req.body
            });
        }
        //Verificar que el usuario realmente existe en nuestra base de Datos
        const {email, password} = req.body;
        const UsuarioDB = await User.findOne(
            {
                where: {email: email}
            });
        if (!UsuarioDB) {
            return res.render('login/login', {
                errores: [{ msg: 'spartan no encontrado' }],
                datos: req.body
            });
        }

        //Comparar la contraseña que el usuario envía en el fórmulario y la contraseña en la base de datos
        const passwordCorrecta = await bcrypt.compare(password, UsuarioDB.password);

        if (!passwordCorrecta) {
            return res.render('login/login', {
                errores: [{ msg: 'Correo o contraseña incorrecta' }],
                datos: req.body
            });
        }

        //Utilizamos los datos para crear la sesion

        req.session.user = {
            id: UsuarioDB.id,
            email: UsuarioDB.email,
            nombre: UsuarioDB.nombre,
            rol: UsuarioDB.rol,
            estado_cuenta: UsuarioDB.estado_cuenta,
            avatar: UsuarioDB.avatar,
        };
        //Guardamos los datos para evitar que redirect se los salte.

        req.session.save((error) => {
            if (error) {
                console.log('No se pudo iniciar sesión', error);
                return res.status(500).send('Error critico');
            } else {
                res.redirect('/');
            }
        });

    } catch (error) {
        console.log('Error crítico en el sistema');
        return res.status(500).send('Error crítico');
    }
}


//Renderizar el perfil usando los atributos de sesion
exports.mostrarPerfil = async (req, res) => {
    try {

        const user = req.session.user;

        if (!user) return res.redirect('/login');

        const usuariodb = await User.findByPk(user.id);
        const juegosbiblioteca = await usuariodb.getJuegosBiblioteca();

        const juegoscreados = await Juego.findAll({
            where: {
                userId: user.id
            }
        });
        res.render('perfil/perfil', {
            user,
            juegosbiblioteca,
            juegoscreados
        });

    } catch (error) {
        console.log(error);
    }
};

    //Cerrar sesión (Logout)

exports.CerrarSesion= async (req, res) => {
    //Verificamos que exista realmente una sesión, de lo contrario, redirecciona a login para iniciar una nueva
        try {
            if (!req.session) {
                return res.redirect('/login');
            }
        //Eliminamos la sesión (usamos promisify ya que la herramienta destroy de session no permite eliminacion async, asi que debemos volverla una promesa)
         const EliminarSesion= promisify(req.session.destroy).bind(req.session);

            await EliminarSesion();

            //Limpiamos las cookies de navegación
          res.clearCookie('connect.sid');

          return res.redirect('/');

        }catch(error) {
            console.log('Error al cerrar sesión',error);
            res.status(500).send('Error critico');

        }
}