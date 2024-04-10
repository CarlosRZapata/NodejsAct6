import { Request, Response } from "express";
import { ClientService } from "./clientes.service";

export class clientController  {
    static async getClientById(req: Request, res: Response) {
        try {
            const clientId = req.params.id;
            const user = await ClientService.getClientById(clientId);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getClients(_req: Request, res: Response) {
        try {
            const client = await ClientService.getClients();
            res.json(client);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}