const DataTypes = require('sequelize');
const sequelize= require('../database/configDatabase');

const Juego = sequelize.define('Juego', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    imagen_portada: {
        type: DataTypes.STRING,
    },
    precio:{
        type: DataTypes.DOUBLE,
        allowNull: false,

    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'juegos',
    timestamps: true,
});

module.exports= Juego;