const { check } = require('express-validator');

const perfilEditarValidator = [

    check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres')
        .trim(),

    check('email')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('Correo inválido')
        .normalizeEmail()

];

module.exports = perfilEditarValidator;