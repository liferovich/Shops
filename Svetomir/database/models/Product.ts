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
    force: {
        type: DataTypes.INTEGER,
    },
    cross: {
        type: DataTypes.STRING,
    },
    maxlength: {
        type: DataTypes.INTEGER,
    },
    rezka: {
        type: DataTypes.INTEGER,
    },
    buhlength: {
        type: DataTypes.INTEGER,
    },
    volt: {
        type: DataTypes.INTEGER,
    },
    size: {
        type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.INTEGER,
    }
});

export default Product;