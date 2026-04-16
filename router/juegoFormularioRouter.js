const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const juegoFormularioController = require('../controllers/juegoFormularioController');

router.get('/formulario', juegoFormularioController.MostrarFormularioJuegos);
router.post(
    '/formulario', upload.single('imagen'), juegoFormularioController.AñadirelJuego);

module.exports = router;
