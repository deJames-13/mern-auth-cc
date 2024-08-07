import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const userRouter = Router();

userRouter
  .route('/profile')
  .get(userController.getProfile)
  .put(userController.updateProfile);

userRouter.post('/', userController.register);
userRouter.post('/authenticate', userController.authenticate);
userRouter.post('/logout', userController.logout);

export default userRouter;
