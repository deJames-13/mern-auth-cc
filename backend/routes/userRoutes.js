import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const userRouter = Router();

userRouter.post('/authenticate', userController.authenticate);
userRouter.post('/register', userController.register);
userRouter.post('/logout', userController.logout);

export default userRouter;
