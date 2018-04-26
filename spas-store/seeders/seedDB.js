'use strict';
//SQL formatted date
var date;
date = new Date();
date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' +
    ('00' + date.getUTCHours()).slice(-2) + ':' +
    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
    ('00' + date.getUTCSeconds()).slice(-2);

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Swags', [{

            title: 'Slightly Stoopid Tshirt',
            type: 'clothing',
            item_id: 1,
            price: 20.00,
            quantity: 100,
            description: 'blue logo slightly stoopid shirt',
            createdAt: date,
            updatedAt: date
        },
        {

            title: 'Dave Matthews Tshirt',
            type: 'clothing',
            item_id: 2,
            price: 20.00,
            quantity: 100,
            description: 'white logo slightly stoopid shirt',
            createdAt: date,
            updatedAt: date
        },
        {

            title: 'Slightly Stoopid Hat',
            type: 'clothing',
            item_id: 3,
            price: 15.00,
            quantity: 50,
            description: 'black logo slightly stoopid hat',
            createdAt: date,
            updatedAt: date
        }
        ], {});
    },


    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};

