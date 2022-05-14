import { sequelize } from '../database/database.state';

type OrderType = {
    products: number[],
    total: number,
    email: string,
    receiver: string,
    phone: string,
    comment: string,
    index: string,
    city: string,
    street: string,
    build: string,
    flat: string,
    payment: string,
    delivery: string,
}

class OrderService {
    async addOrder(order: OrderType) {
        const newOrder = await sequelize.model('Order').create(order);

        return newOrder;
    }
}

export default new OrderService();