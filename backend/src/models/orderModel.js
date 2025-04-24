const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const { toDefaultValue } = require('sequelize/lib/utils');

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total_prices: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        toDefaultValue: 'pending',
        validate: {
            isIn: [['pending', 'paid', 'shipped', 'delivered', 'cancelled']]
        }
    }
}, {
    timestamps: true
});

Order.belongs(User, { foreingKey: 'user_id' });

module.exports = Order;
