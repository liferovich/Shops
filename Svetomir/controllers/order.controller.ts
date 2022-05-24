import express from 'express';
import orderService from '../services/order.service';

class OrderController {

    async addOrder(req: express.Request, res: express.Response) {
        try {
            const order = req.body.order;
            const newOrder = await orderService.addOrder(order);

            return res.json(newOrder);
        } catch (err: any) {
            if (err.status) {
                res.status(err.status).json({ error: { message: err.message } });
            } else {
                res.status(500).json({ error: { message: 'Server error..' } });
            }
        }
    }
    async getOrders(req: express.Request, res: express.Response) {
        try {
            const id = req.params.id;
            const orders = await orderService.getOrders(Number(id));
            console.log(orders)

            return res.json({orders});
        } catch (err: any) {
            if (err.status) {
                res.status(err.status).json({ error: { message: err.message } });
            } else {
                res.status(500).json({ error: { message: 'Server error..' } });
            }
        }
    }
}

export default new OrderController();