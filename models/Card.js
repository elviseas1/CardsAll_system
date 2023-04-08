const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Card = db.define('Card', { 
    codeCard: {
        type: DataTypes.STRING,
        require: true,
    },
    name: {
        type: DataTypes.STRING,
        require: false,
    },
    phone: {
        type: DataTypes.STRING,
        require: false
    },
    email: {
        type: DataTypes.STRING,
        require: false,
    },
    whatsapp: {
        type: DataTypes.STRING,
        require: false
    },
    youtube: {
        type: DataTypes.STRING,
        require: false
    },
    instagram: {
        type: DataTypes.STRING,
        require: false
    },
    linkedin: {
        type: DataTypes.STRING,
        require: false
    },
    image: {
        type: DataTypes.TEXT,
        require: false,
    },
    mapLongitude: {
        type: DataTypes.STRING,
        require: false,
    },
    mapLatitude: {
        type: DataTypes.STRING,
        require: false,
    },
    qrcodeCode: {
        type: DataTypes.TEXT,
        require: true,
    },
    UserIdAdm: {
        type: DataTypes.INTEGER,
        require: true,
    },
})

module.exports = Card