var Sequelize = require('sequelize');
var sequelize = require('../Models/index'); 

module.exports = function(sequelize, DataTypes) {
    const Swag = sequelize.define('swag', {
        title: Sequelize.STRING,
        type: Sequelize.STRING,
        image: Sequelize.BLOB,
        price: Sequelize.DOUBLE,
        quantity: Sequelize.INTEGER,
        description: Sequelize.STRING
    })
    return Swag;
}