import { Router } from 'express';
import { productRouter } from './product';
import { orderRouter } from './order';
import { userRouter } from './user';

export const router = Router();

router.use('/products', productRouter);
router.use('/order', orderRouter);
router.use('/user', userRouter)