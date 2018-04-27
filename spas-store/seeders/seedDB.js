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
            image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjo39u0rNvaAhUknuAKHVtpC98QjRx6BAgBEAU&url=http%3A%2F%2Fwww.dresscodeclothing.com%2Fp%2Fslightly-stoopid-mens-uprising-t-shirt-in-yellow-1053722&psig=AOvVaw1Id98dv7JtiShUUDZVShsF&ust=1524949144947264',
            price: 20.00,
            quantity: 100,
            description: 'blue logo slightly stoopid shirt',
            createdAt: date,
            updatedAt: date
        },
        {

            title: 'Slightly Stoopid Tshirt',
            type: 'clothing',
            image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi4ud3XrNvaAhVwUN8KHVvaAiQQjRx6BAgBEAU&url=http%3A%2F%2Fwww.shoprockamerica.com%2Fproduct%2Fsweet-skull&psig=AOvVaw1Id98dv7JtiShUUDZVShsF&ust=1524949144947264',
            price: 20.00,
            quantity: 100,
            description: 'white logo slightly stoopid shirt',
            createdAt: date,
            updatedAt: date
        },
        {

            title: 'Slightly Stoopid Tshirt',
            type: 'clothing',
            image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj69o7srNvaAhVEUt8KHcnwC4YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.merchbar.com%2Frock-alternative%2Fslightly-stoopid%2Fslightly-stoopid-t-shirt-slightly-stoopid-ocean-beach-t-shirt-503842&psig=AOvVaw1Id98dv7JtiShUUDZVShsF&ust=1524949144947264',
            price: 15.00,
            quantity: 50,
            description: 'black logo slightly stoopid hat',
            createdAt: date,
            updatedAt: date
        },
            {

                title: 'Slightly Stoopid Tshirt',
                type: 'clothing',
                image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjW6IeSrdvaAhVNJt8KHQ2tCisQjRx6BAgBEAU&url=https%3A%2F%2Fslightlystoopid.shopfirebrand.com%2F&psig=AOvVaw1Id98dv7JtiShUUDZVShsF&ust=1524949144947264',
                price: 20.00,
                quantity: 100,
                description: 'blue logo slightly stoopid shirt',
                createdAt: date,
                updatedAt: date
            },
            {

                title: 'Slightly Stoopid Tshirt',
                type: 'clothing',
                image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj3sIWkrdvaAhUPm-AKHamfCq4QjRx6BAgBEAU&url=https%3A%2F%2Fposhmark.com%2Flisting%2FSlightly-Stoopid-MERCH-TABLE-T-5aa0a7bdf9e501824157b7e9&psig=AOvVaw1Id98dv7JtiShUUDZVShsF&ust=1524949144947264',
                price: 20.00,
                quantity: 100,
                description: 'white logo slightly stoopid shirt',
                createdAt: date,
                updatedAt: date
            },
            {

                title: 'Slightly Stoopid Hat',
                type: 'clothing',
                image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiKl4HOrdvaAhWriOAKHevvAi4QjRx6BAgBEAU&url=https%3A%2F%2Ftshirt.enam.site%2Fslightly-stoopid-t-shirt%2F&psig=AOvVaw1Id98dv7JtiShUUDZVShsF&ust=1524949144947264',
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

