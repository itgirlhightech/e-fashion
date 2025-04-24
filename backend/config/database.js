// const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize({
   // host: 'localhost',
    //dialect: 'postgres',
    //database: 'postgres',
    //username: 'evilyn',
  //  password: 'letIrpas5',
//});

//module.exports = sequelize; 
const sequelize = require('./config/database');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const OrderItem = require('./models/orderItemModel'); // caso tenha criado

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync({ alter: true }); // Cria/atualiza tabelas automaticamente
    console.log('📦 Todas as tabelas foram sincronizadas.');

  } catch (error) {
    console.error('❌ Erro ao conectar ou sincronizar com o banco:', error);
  }
}

syncDatabase();
