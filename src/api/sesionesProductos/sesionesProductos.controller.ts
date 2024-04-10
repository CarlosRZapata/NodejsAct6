import { Request, Response } from "express";
import { SessionProductService } from "./sesionesProductos.service";

export class sessionProductController  {
    static async getSessionProductById(req: Request, res: Response) {
        try {
            const sesisonProductId = req.params.id;
            const sessionProduct = await SessionProductService.getSessionProductById(sesisonProductId);
            res.json(sessionProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getSessionsProduct(_req: Request, res: Response) {
        try {
            const sessionProduct = await SessionProductService.getSessionsProduct();
            res.json(sessionProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}