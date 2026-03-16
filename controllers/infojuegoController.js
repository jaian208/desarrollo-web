const Juego = require('../models/juego');


function seleccionarJuegoAleatorio(array, cantidad) {
    return [...array].sort(() => 0.5 - Math.random()).slice(0, cantidad);
}

exports.juegoEscogido = async (req, res) => {
    try {
        const idJuego = req.params.id;
        const JuegosDB = await Juego.findAll();
        const JuegoPrincipal= await Juego.findByPk(idJuego);


        res.render('infojuego/infojuego', {
            juego: JuegoPrincipal,
            juegosRecomendaciones1: seleccionarJuegoAleatorio(JuegosDB, 4),
        });

    }catch(error){
        console.error('Fallo al cargar la informacion del juego', error);
        res.status(500).send('Erro ao cargar la informacion del juego');
    }
}

