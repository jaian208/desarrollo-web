const express= require('express');
const router = express.Router();

const juegoEdicionController = require('../controllers/juegoEdicionController');

router.get('/edicion/:id',juegoEdicionController.MostrarFormularioEdicion);
router.post('/edicion/:id',juegoEdicionController.EditarJuego);
router.post('/juego/eliminar/:id', juegoEdicionController.eliminarJuego);

module.exports = router;