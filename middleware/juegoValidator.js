const { check } = require('express-validator');

const validatejuego = [

    check('nombre')
        .notEmpty().withMessage('Nombre del juego requerido')
        .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres')
        .trim(),

    check('categoria')
        .notEmpty().withMessage('Seleccione una categoría')
        .trim(),

    check('precio')
        .notEmpty().withMessage('Ingrese precio')
        .isFloat({ gt: 0 }).withMessage('Debe ser mayor a 0'),

    check('descripcion')
        .optional()
        .isLength({ max: 500 }).withMessage('Máximo 500 caracteres')
        .trim(),

    check('imagen_url')
        .optional()
        .isURL().withMessage('Debe ser una URL válida')
];

module.exports = validatejuego;