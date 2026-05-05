const express= require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const validateGame = require('../middleware/juegoValidator');
const juegoEdicionController = require('../controllers/juegoEdicionController');

router.get('/edicion/:id', juegoEdicionController.MostrarFormularioEdicion);
router.post('/edicion/:id',upload.single('imagen_portada'), validateGame,
    juegoEdicionController.EditarJuego);
router.post('/juego/eliminar/:id', juegoEdicionController.eliminarJuego);

module.exports = router;