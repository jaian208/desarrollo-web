const Juego= require('../models/juego');
const upload = require('../middleware/upload');


exports.MostrarFormularioJuegos= async function (req, res) {
    try {
        //Verificar si el usuario es admin
        const UserAdmin1 = req.session.user;
        if (UserAdmin1 && UserAdmin1.rol === 'admin') {
            res.render('formularioJuego/formularioJuego');
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

        const { nombre, descripcion, precio, categoria } = req.body;

        // imagen puede venir por URL o por archivo
        const imagen = req.file
            ? '/images/home/' + req.file.filename
            : req.body.imagen_portada;

        // Verificar si el juego ya existe
        const JuegoExistente = await Juego.findOne({
            where: { nombre: nombre }
        });

        if (JuegoExistente) {
            return res.status(400).send('Error, juego ya existente');
        }

        // Verificar admin
        const UserAdmin = req.session.user;

        if (!UserAdmin || UserAdmin.rol !== 'admin') {
            return res.status(403).send('No autorizado');
        }

        await Juego.create({
            nombre,
            imagen_portada: imagen || '/images/default-game.png',
            descripcion,
            precio,
            categoria,
            userId: UserAdmin.id
        });

        return res.redirect('/');

    } catch (error) {
        console.log('Error al crear juego', error);
        res.status(500).send('Error crítico');
    }
};

exports.EditarJuego = async function (req, res) {

}