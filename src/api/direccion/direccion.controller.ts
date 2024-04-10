import { Request, Response } from "express";
import { DirectionService } from "./direccion.service";

export class directionController  {
    static async getDirectionById(req: Request, res: Response) {
        try {
            const directionId = req.params.id;
            const direction = await DirectionService.getDirectionById(directionId);
            res.json(direction);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getDirections(_req: Request, res: Response) {
        try {
            const direction = await DirectionService.getDirections();
            res.json(direction);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}