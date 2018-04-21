module.exports = function(sequelize, DataTypes) {
    const Swag = sequelize.define('swag', {
        title: Sequelize.STRING,
        type: Sequelize.STRING,
        item_id: Sequelize.INTEGER,
        price: Sequelize.DOUBLE,
        quantity: Sequelize.INTEGER,
        description: Sequelize.STRING
    })
    return Swag;
}