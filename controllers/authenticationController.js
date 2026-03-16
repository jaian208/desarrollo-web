const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.mostrarLogin = async (req, res) => {
    res.render('login/login');
}

exports.AutenticarLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const UsuarioDB = await User.findOne(
            {
                where: {email: email}
            });
        if (!UsuarioDB) {
            return res.status(401).send('Acceso Denegado');
        }

        const passwordCorrecta = await bcrypt.compare(password, UsuarioDB.password);

        if (!passwordCorrecta) {
            return res.status(401).send('Contraseña incorrecta, intente nuevamente');
        }

        //Utilizar los datos para la session

        req.session.user= {
            id: UsuarioDB.id,
            email: UsuarioDB.email,
            nombre: UsuarioDB.nombre,
        };
        //Guardamos los datos para evitar que redirect se los salte.

        req.session.save((err) => {
            if (err) {
                console.log('No se pudo iniciar sesión',err);
                return res.status(500).send('Error critico');
            }else {
                res.redirect('/');
            }
        });

    }catch(error) {
        console.log('Error crítico en el sistema');
        return res.status(500).send('Error crítico');
    }



}