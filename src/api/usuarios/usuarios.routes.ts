import express from 'express';
import { userController } from '../usuarios/ususarios.controller';

const userRouter = express.Router();

userRouter.get('/',userController.getUsers)
userRouter.get('/:id',userController.getUserById)

export default userRouter