const { check } = require('express-validator');

const validateuser = [
    check('nombre')
        .notEmpty().withMessage('pon un nombre spartan')
        .trim(),

    check('email')
        .notEmpty().withMessage('pon tu correo spartan')
        .isEmail().withMessage('Email inválido')
        .normalizeEmail(),

    check('password')
        .notEmpty().withMessage('asegura tu cuenta spartan')
        .isLength({ min: 6 }).withMessage('Mínimo 6 caracteres spartan')
        .trim(),


    check('confirmPassword')
        .notEmpty().withMessage('Debe confirmar la contraseña')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
        })
];

module.exports = validateuser;