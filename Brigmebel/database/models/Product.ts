import { sequelize } from '../database.state';
import pkg from 'sequelize';
const { DataTypes } = pkg;

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    category: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING(123456),
    },
    price: {
        type: DataTypes.INTEGER,
    },
    image: {
        type: DataTypes.STRING,
    },
    color: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.STRING,
    },
    material: {
        type: DataTypes.STRING,
    }
});

export default Product;