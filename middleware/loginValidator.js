const { check } = require('express-validator');

const validatelogin = [
    check('email')
        .notEmpty().withMessage('ingrese su correo spartan')
        .isEmail().withMessage('Email inválido'),

    check('password')
        .notEmpty().withMessage('Ingrese su contraseña spartan')
];

module.exports = validatelogin;