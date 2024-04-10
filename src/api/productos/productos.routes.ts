import express from 'express';
import { productController } from './productos.controller';

const productRouter = express.Router();

productRouter.get('/',productController.getProducts)
productRouter.get('/:id',productController.getProductById)

export default productRouter