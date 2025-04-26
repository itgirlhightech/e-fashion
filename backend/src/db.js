const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect: 'postgres',
});

pool.connect()
    .then(() => console.log('conectado ao postgreSQL!'))
    .catch(err => console.error('erro ao conectar:', err));

module.exports = sequelize;