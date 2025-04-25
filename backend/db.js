const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'letItpas5',
    port: 5050,
});

pool.connect()
    .then(() => console.log('conectado ao postgreSQL!'))
    .catch(err => console.error('erro ao conectar:', err));

module.exports = pool;