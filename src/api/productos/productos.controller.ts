import { Request, Response } from "express";
import { ProductService } from "./productos.service";

export class productController  {
    static async getProductById(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const product = await ProductService.getProductById(productId);
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getProducts(_req: Request, res: Response) {
        try {
            const product = await ProductService.getProducts();
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}