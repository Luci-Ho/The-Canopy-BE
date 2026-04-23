import { Router } from 'express';
import { getMe, login, register } from '../controllers/auth.controller';
import { authGuard } from '../middlewares/auth.middleware';
import { validateBody } from '../middlewares/validate.middleware';
import { loginSchema, registerSchema } from '../validators/auth.validator';

export const authRouter = Router();

authRouter.post('/register', validateBody(registerSchema), register);
authRouter.post('/login', validateBody(loginSchema), login);
authRouter.get('/me', authGuard, getMe);
