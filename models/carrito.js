const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDatabase');

const Carrito = sequelize.define('Carrito', {

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    juegoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cantidad: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }

}, {
    tableName: 'carrito',
    timestamps: true
});

module.exports = Carrito;