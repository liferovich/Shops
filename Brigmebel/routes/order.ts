import { Router } from 'express';
import { default as orderController } from '../controllers/order.controller';

export const orderRouter = Router();

orderRouter.post('/', orderController.addOrder);