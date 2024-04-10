import express from 'express';
import { directionController } from './direccion.controller';

const directionRouter = express.Router();

directionRouter.get('/',directionController.getDirections)
directionRouter.get('/:id',directionController.getDirectionById)

export default directionRouter