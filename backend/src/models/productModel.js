const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Uber = require('./userModel');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }, 
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});

Product.belongsTo(User, { foreignKey: 'seller_id' });

module.exports = Product;