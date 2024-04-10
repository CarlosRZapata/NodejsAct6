import { Request, Response } from "express";
import { SessionService } from "./sesiones.service";

export class sessionController  {
    static async getSessionByID(req: Request, res: Response) {
        try {
            const sessionId = req.params.id;
            const session = await SessionService.getSessionById(sessionId);
            res.json(session);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getSessions(_req: Request, res: Response) {
        try {
            const session = await SessionService.getSessions();
            res.json(session);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}