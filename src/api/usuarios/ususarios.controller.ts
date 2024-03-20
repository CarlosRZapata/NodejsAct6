import { Request, Response } from "express";
import { UserService } from "../usuarios/usuarios.service";

export class userController  {
    static async getUserById(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const user = await UserService.getUserById(userId);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getUsers(_req: Request, res: Response) {
        try {
            const user = await UserService.getUsers();
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}