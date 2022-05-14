import { sequelize } from '../database.state';
import pkg, { INTEGER } from 'sequelize';
const { DataTypes } = pkg;


const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    products: {
        type: DataTypes.ARRAY(INTEGER),
        defaultValue: []
    },
    total: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiver: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
    },
    comment: {
        type: DataTypes.STRING,
    },
    index: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    street: {
        type: DataTypes.STRING,
    },
    build: {
        type: DataTypes.STRING,
    },
    flat: {
        type: DataTypes.STRING,
    },
    payment: {
        type: DataTypes.STRING,
    },
    delivery: {
        type: DataTypes.STRING,
    },

});

export default Order;
