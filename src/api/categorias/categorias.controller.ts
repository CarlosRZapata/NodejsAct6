import { Request, Response } from "express";
import { CategoryService } from "./categorias.service";

export class categoryController  {
    static async getCategoryById(req: Request, res: Response) {
        try {
            const categoryId = req.params.id;
            const category = await CategoryService.getCategoryById(categoryId);
            res.json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getCategories(_req: Request, res: Response) {
        try {
            const category = await CategoryService.getCategories();
            res.json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}