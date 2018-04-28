# SPAS
React boilerplate multiple page app using mongoose/mongoDB as database

# This project, SPAS, stands for Single Page App w/ SQL

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Make sure your package.json at server level has these 'scripts'
![Scripts](C:\Users\lowan\Downloads\Scripts_SPAS.png)
Having this 'start' script alloss you to run the local SQL server and the client side react app

To properly run this project you must,
1. install these packages: 
    - [AOS](https://michalsnik.github.io/aos/)
    - [Radium](https://www.npmjs.com/package/radium)
    - React Bootstrap
    - [React-Page-Scroller](https://www.npmjs.com/package/react-page-scroller)
    - [Sequelize](https://www.npmjs.com/package/sequelize)
      (to properly use sequelize you must globally install mysql - 'npm i -g mysql')

    (AOS handles animation of components)
    (Radium handles extra css events like hover)
    (React-Bootstrap is used for some styling aspects)
    (React-Page-Scroller treats each component as its own page, allowing you to 'scroll' to change 'pages(components)')

    'npm i -S' should install all of the required dependencies.

2. Go to your config file and change your root settings with your password to access mysql.
3. Set up your schema file.
4. Set up your seeds file.
5. Change the components to fit your personal brand/or band
6. 'yarn start' to enjoy.