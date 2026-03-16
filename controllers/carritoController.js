const User = require('../models/user');
const Juego = require('../models/juego');


exports.agregaralCarro = async function (req, res) {
    try {
        if(!req.session.user){
            return res.redirect('/login');
        }
        const idUsuario = req.session.user.id;
        const idjuego = req.params.id;

        //buscar user y juego
        const UserDB = await User.findByPk(idUsuario);
        const juegoAgregar= await Juego.findByPk(idjuego);

        //Insertar registro a la tabla (proceso de Sequelize)

        await UserDB.addJuego(juegoAgregar);

        res.redirect('/carrito');

    }catch(error){
        console.log('Error al agregar el juego',error);
        res.status(500).send('Error al agregar el juego');
    }
}


exports.MostrarCarro = async (req, res) => {
    try {
        if(!req.session.user){
            return res.redirect('/login');
        }


        const idusuario = req.session.user.id;


        const Usuario= await User.findByPk(idusuario, {
            include: Juego
        });


        //Esto permite que cualquier cosa que Sequelize traiga de Usuario denominado como Juego, lo meta en un array
        const juegosEnCarrito = Usuario.Juegos || [];

        let total=0;
        juegosEnCarrito.forEach(juego => {
            total+= parseFloat(juego.precio);
        });

        res.render('carrito/carrito', {juegos: juegosEnCarrito, total: total});



    }catch(error){
        console.log('Error al mostrar el carro el juego',error);
        res.status(500).send('Error al mostrar el carro');
    }

}