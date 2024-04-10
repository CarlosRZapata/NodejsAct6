import express from 'express';
import { genderController } from './genero.controller';

const genderRouter = express.Router();

genderRouter.get('/',genderController.getGenders)
genderRouter.get('/:id',genderController.getGenderById)

export default genderRouter