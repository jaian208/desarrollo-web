const DataTypes = require('sequelize');
const sequelize= require('../database/configDatabase');

const User = sequelize.define('User', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true     //Se verifica que sea un email válido (presencia de la @)
        }


    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    estado_cuenta: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    rol: {
        type: DataTypes.STRING(20),
        defaultValue: "cliente"
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'users',
    timestamps: true,
});


module.exports= User;