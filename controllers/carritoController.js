const User = require('../models/user');
const Juego = require('../models/juego');
const sequelize = require('../database/configDatabase');
const Carrito = require('../models/carrito');

exports.agregaralCarro = async function (req, res) {
    try {
        if (!req.session.user) {
            return res.redirect('/login');
        }

        const userId = req.session.user.id;
        const juegoId = req.params.id;

        await Carrito.create({
            userId: userId,
            juegoId: juegoId
        });

        res.redirect('/carrito');

    } catch (error) {
        console.log('Error al agregar el juego', error);
        res.status(500).send('Error al agregar el juego');
    }
}


exports.MostrarCarro = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.redirect('/login');
        }

        const userId = req.session.user.id;

        const items = await Carrito.findAll({
            where: { userId }
        });

        const juegosEnCarrito = await Promise.all(
            items.map(item => Juego.findByPk(item.juegoId))
        );

        let total = 0;
        juegosEnCarrito.forEach(juego => {
            total += parseFloat(juego.precio);
        });

        res.render('carrito/carrito', {
            juegos: juegosEnCarrito,
            total
        });

    } catch (error) {
        console.log('Error al mostrar el carrito', error);
        res.status(500).send('Error al mostrar el carrito');
    }
};

exports.eliminarJuego = async (req, res) => {
    try {
        const userId = req.session.user.id;
        const juegoId = req.params.id;

        await Carrito.destroy({
            where: {
                userId: userId,
                juegoId: juegoId
            }
        });

        res.redirect('/carrito');

    } catch (error) {
        console.log(error);
        res.redirect('/carrito');
    }
};
exports.finalizarCompra = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.redirect('/login');
        }

        const userId = req.session.user.id;

        const usuario = await User.findByPk(userId, {
            include: {
                model: Juego,
                as: 'carrito'
            }
        });

        const juegosCarrito = usuario.carrito;

        for (let juego of juegosCarrito) {
            await usuario.addJuegosBiblioteca(juego);
        }
        await sequelize.models.Carrito.destroy({
            where: { userId: userId }
        });

        res.redirect('/perfil');

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al finalizar compra');
    }
};