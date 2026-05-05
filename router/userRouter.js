const express=require('express');
const router=express.Router();
const uservalidator= require('../middleware/userValidator');
const upload=require('../middleware/upload');
const userController= require('../controllers/userController');

router.get('/register', userController.mostrarFormulario);

router.post('/register', upload.single('avatar'),uservalidator,userController.crearUsuario);

module.exports = router;