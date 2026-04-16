const Juego= require('../models/Juego');

exports.MostrarFormularioEdicion = async (req, res) => {
    try {
        const UserAdmin1 = req.session.user;
        const idJuego = req.params.id;

        if (!UserAdmin1) return res.redirect('/login');

        const juego = await Juego.findByPk(idJuego);

        if (!juego) return res.redirect('/');
        if (juego.userId !== UserAdmin1.id && UserAdmin1.rol !== 'admin') {
            return res.redirect('/');
        }

        res.render('formularioEdicion/formularioEdicion', { juego });

    } catch (error) {
        console.log(error);
        res.status(400).send('Usuario no autorizado');
    }
};

exports.EditarJuego = async (req, res) => {
    try {
        const user = req.session.user;

        if (!user || user.rol !== 'admin') {
            return res.status(403).send('No autorizado');
        }

        const idJuego = req.params.id;

        const juego = await Juego.findByPk(idJuego);

        if (!juego) {
            return res.status(404).send('Juego no encontrado');
        }
        if (juego.userId !== user.id) {
            return res.status(403).send('No puedes editar este juego');
        }

        const { nombre, precio, descripcion, categoria, imagen_portada } = req.body;
        juego.nombre = nombre;
        juego.precio = precio;
        juego.descripcion = descripcion;
        juego.categoria = categoria;
        juego.imagen_portada = imagen_portada;

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

        if (!user || user.rol !== 'admin') {
            return res.status(403).send('No autorizado');
        }

        const juegoId = req.params.id;

        const juego = await Juego.findByPk(juegoId);

        if (!juego) {
            return res.status(404).send('Juego no encontrado');
        }
        if (juego.userId !== user.id) {
            return res.status(403).send('No puedes eliminar este juego');
        }

        await juego.destroy();

        res.redirect('/perfil');

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar juego');
    }
};