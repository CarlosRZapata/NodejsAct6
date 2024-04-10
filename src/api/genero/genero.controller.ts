import { Request, Response } from "express";
import { GenderService } from "./genero.service";

export class genderController  {
    static async getGenderById(req: Request, res: Response) {
        try {
            const genderId = req.params.id;
            const gender = await GenderService.getGenderById(genderId);
            res.json(gender);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getGenders(_req: Request, res: Response) {
        try {
            const gender = await GenderService.getGenders();
            res.json(gender);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}