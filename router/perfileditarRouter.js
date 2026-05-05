const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const usereditarController = require("../controllers/usereditarController");
const validateperfil = require('../middleware/perfileditarValidator');

router.get('/perfil/editar', usereditarController.mostrarEditarPerfil);
router.post('/perfil/editar', upload.single('avatar'),validateperfil, usereditarController.editarPerfil);

module.exports = router;