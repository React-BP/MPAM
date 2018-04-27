const db = require("../models");
const sequelize = require('sequelize');

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.sequelize.query("SELECT * FROM swags", { type: db.sequelize.QueryTypes.SELECT })
            .then(swag => {
                // We don't need spread here, since only the results will be returned for select queries
                res.json(swag);
            })
    },
    findById: function (req, res) {
        db.sequelize.query("SELECT * FROM swags WHERE id = '$id'", { type: db.sequelize.QueryTypes.SELECT })
            .then(item => {
                // We don't need spread here, since only the results will be returned for select queries
                res.json(swag);
            })
    },
    create: function (req, res) {

    },
    update: function (req, res) {

    },
    remove: function (req, res) {

    }
};