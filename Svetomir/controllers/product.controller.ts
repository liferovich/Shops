import express from 'express';
import productService from '../services/product.service';

class ProductController {
    async getProducts(req: express.Request, res: express.Response) {
        try {
            const products = await productService.getProducts();

            return res.json({ products });
        } catch (err: any) {
            if (err.status) {
                res.status(err.status).json({ error: { message: err.message } });
            } else {
                res.status(500).json({ error: { message: 'Server error..' } });
            }
        }
    }

    async getProduct(req: express.Request, res: express.Response) {
        try {
            const id = req.params.id
            const product = await productService.getProduct(Number(id));

            return res.json({ product});
        } catch (err: any) {
            if (err.status) {
                res.status(err.status).json({ error: { message: err.message } });
            } else {
                res.status(500).json({ error: { message: 'Server error..' } });
            }
        }
    }

    async getProductsByCategory(req: express.Request, res: express.Response) {
        try {
            const category = req.body.category;
            const products = await productService.getProductsByCategory(category);

            return res.json({ products });
        } catch (err: any) {
            if (err.status) {
                res.status(err.status).json({ error: { message: err.message } });
            } else {
                res.status(500).json({ error: { message: 'Server error..' } });
            }
        }
    }

    async addProduct(req: express.Request, res: express.Response) {
        try {
            const product = req.body;
            const newProduct = await productService.addProduct(product);

            return res.json(newProduct);
        } catch (err: any) {
            if (err.status) {
                res.status(err.status).json({ error: { message: err.message } });
            } else {
                res.status(500).json({ error: { message: 'Server error..' } });
            }
        }
    }
}

export default new ProductController();