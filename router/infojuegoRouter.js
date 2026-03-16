const express= require('express');
const router = express.Router();

const infojuegoController = require('../controllers/infojuegoController');

router.get('/comprar/:id', infojuegoController.juegoEscogido);

module.exports = router;
