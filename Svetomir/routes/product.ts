import { Router } from 'express';
import { default as productController } from '../controllers/product.controller';

export const productRouter = Router();

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProduct);
productRouter.post('/category', productController.getProductsByCategory);
productRouter.post('/', productController.addProduct);