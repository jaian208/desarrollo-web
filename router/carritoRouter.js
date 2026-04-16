const express = require('express');
const router = express.Router();

const authenticationRouter = require('../controllers/carritoController');

router.get('/carrito/agregar/:id', authenticationRouter.agregaralCarro);

router.get('/carrito', authenticationRouter.MostrarCarro);

router.post('/carrito/eliminar/:id', authenticationRouter.eliminarJuego);

router.post("/carrito/finalizar", authenticationRouter.finalizarCompra)

module.exports = router;