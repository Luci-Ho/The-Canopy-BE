import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { comparePassword, hashPassword } from '../utils/hash';
import { signToken } from '../utils/jwt';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  const existing = await UserModel.findOne({ email });
  if (existing) return res.status(409).json({ message: 'Email already exists' });

  await UserModel.create({
    email,
    password: await hashPassword(password),
    isEmailVerified: true,
  });

  return res.status(201).json({ message: 'Registration successful' });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const user = await UserModel.findOne({ email });

  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = signToken({ sub: String(user._id), email: user.email });
  return res.json({ token });
};

export const getMe = async (req: Request, res: Response) => {
  const userId = req.user?.sub;
  const user = await UserModel.findById(userId).select('-password -otpCode -resetToken');
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.json(user);
};
