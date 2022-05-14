import { Router } from 'express';
import { productRouter } from './product';
import { orderRouter } from './order';

export const router = Router();

router.use('/products', productRouter);
router.use('/order', orderRouter);