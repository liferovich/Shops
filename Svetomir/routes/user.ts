import { Router } from 'express';
import { default as userController } from '../controllers/user.controller';
import { body } from 'express-validator';

export const userRouter = Router();

userRouter.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.register
);
userRouter.post('/login', userController.login);