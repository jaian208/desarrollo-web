const express = require('express');
const router = express.Router();
const authenticationRouter = require('../controllers/authenticationController');
const loginvalidator= require('../middleware/loginValidator');

router.get('/login', authenticationRouter.mostrarLogin);

router.post('/login',loginvalidator ,authenticationRouter.AutenticarLogin);

router.get('/perfil', authenticationRouter.mostrarPerfil);

router.get('/logout', authenticationRouter.CerrarSesion);

module.exports = router;