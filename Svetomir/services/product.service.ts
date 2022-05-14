import { sequelize } from '../database/database.state';

type ProductType = {
    category: string,
    name: string,
    description: string,
    price: string,
    image: string,
    color: string,
    force: number,
    cross: string,
    maxlength: number,
    rezka: number,
    buhlength: number,
    volt: number,
    size: string,
    weight: number,
}

class ProductService {
    async getProducts() {
        let products = await sequelize.model('Product').findAll();

        if (!products) {
            products = [];
        }

        return products;
    }

    async getProduct(id: number) {
        let product = await sequelize.model('Product').findOne({
            where: {
                id
            }
        });

        return product;
    }

    async getProductsByCategory(category: string) {
        let products = await sequelize.model('Product').findAll({
            where: {
                category
            }
        });

        if (!products) {
            products = [];
        }

        return products;
    }

    async addProduct(product: ProductType) {
        const newProduct = await sequelize.model('Product').create(product);

        return newProduct;
    }
}

export default new ProductService();