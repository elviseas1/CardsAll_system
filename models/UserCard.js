const { DataTypes } = require('sequelize')

const db = require('../db/conn')

// Adress
const User = require('./User')
const Card = require('./Card')

const UserCard = db.define('UserCard', { 

})

User.belongsToMany(Card, { through: UserCard });
Card.belongsToMany(User, { through: UserCard });

module.exports = UserCard
