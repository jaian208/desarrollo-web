const Juego = require('../models/juego');

function seleccionarJuegoAleatorio(array, cantidad){
    return [...array].sort(() => 0.5 - Math.random()).slice(0, cantidad);  //Sort es un metodo de ordenamiento que funciona con bucles, simplemente ordena aleatoriamente y corta en la cantidad de juegos a mostrar
}

//Categorias
async function ObtenerCategorias() {
    const juegos = await Juego.findAll({
        attributes: ['categoria'],
        group: ['categoria']
    });       //TODO FUNCIONA EN SINCRONIA CON LA DB, AQUI LA FUNCION ASINCRONICA OBTIENE TODOS LOS JUEGOS DE LA DB Y EXTRAE SU ATRIBUTO CATEGORIA, RETORNA UN MAPEO DE LAS CATEGORIAS DE TODOS LOS JUEGOS

    return juegos.map(juego => ({
        nombre: juego.categoria,
        imagen: `/images/categorias/${juego.categoria.toLowerCase()}.png`

    }));
}

    //Exportar home junto con todos los juegos presentes en la base de datos 
    exports.home = async (req, res) => {
        try {
            const JuegosDB = await Juego.findAll();
            const categoriasJuegos = await ObtenerCategorias();

            res.render('home/home', {
                juegosCarrusel: seleccionarJuegoAleatorio(JuegosDB, 4),
                juegosRecomendaciones: seleccionarJuegoAleatorio(JuegosDB, 4),
                recomendacionesparati: seleccionarJuegoAleatorio(JuegosDB, 4),
                categorias: categoriasJuegos
            });
        } catch (error) {
            console.error('Fallo al cargar los juegos', error);
            res.status(500).send('Erro ao cargar los juegos');

        }

    }

    //Mostrar las Categorías y los juegos que pertenezcan a cada categoría (sin funcionalidad por el momento)
    exports.categoria = async (req, res) => {
        try {
            const categoriaBuscada = req.params.nombreCategoria;
            const juegosFiltrados = await Juego.findAll({
                where: {
                    categoria: categoriaBuscada
                }
            });

            const categoriasJuegos = await  ObtenerCategorias();
            res.render('categoria/categoria', {
                juegos: juegosFiltrados,
                categorias: categoriasJuegos,
                categoriaNombre: categoriaBuscada
            });
        }catch(error){
            console.error('Fallo al cargar las categorias', error);
            res.status(500).send('Erro ao cargar las categorias');
        }

    }
