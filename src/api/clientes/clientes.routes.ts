import express from 'express';
import { clientController } from './clientes.controller';

const clientRouter = express.Router();

clientRouter.get('/',clientController.getClients)
clientRouter.get('/:id',clientController.getClientById)

export default clientRouter