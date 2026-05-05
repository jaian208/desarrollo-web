const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const juegovalidator = require('../middleware/juegoValidator');

const juegoFormularioController = require('../controllers/juegoFormularioController');

router.get('/formulario', juegoFormularioController.MostrarFormularioJuegos);
router.post(
    '/formulario', upload.single('imagen_portada'),juegovalidator, juegoFormularioController.AñadirelJuego);

module.exports = router;
