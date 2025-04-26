const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postegres', 'postgres', 'letItpas5',{
   // user: 'postgres',
    host: 'localhost',
    //database: 'postgres',
   // password: 'letItpas5',
    port: 5050,
    dialect: 'postgres',
});

pool.connect()
    .then(() => console.log('conectado ao postgreSQL!'))
    .catch(err => console.error('erro ao conectar:', err));

module.exports = sequelize;