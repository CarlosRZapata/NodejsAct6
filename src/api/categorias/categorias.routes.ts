import express from 'express';
import { categoryController } from './categorias.controller';

const categoryRouter = express.Router();

categoryRouter.get('/',categoryController.getCategories)
categoryRouter.get('/:id',categoryController.getCategoryById)

export default categoryRouter