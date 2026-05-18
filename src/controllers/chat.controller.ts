import { Request, Response } from 'express';
import { ChatSessionModel } from '../models/chat-session.model.js';
import {
  createSessionSchema,
  appendMessagesSchema,
  updateTitleSchema,
} from '../validators/chat.validator.js';

export const listSessions = async (req: Request, res: Response) => {
  const userId = req.user?.sub;

  const sessions = await ChatSessionModel.find({ userId })
    .select('title updatedAt createdAt messages')
    .sort({ updatedAt: -1 })
    .lean();

  const list = sessions.map((s) => {
    const lastUserOrModel = [...s.messages].reverse().find(
      (m) => m.role === 'user' || m.role === 'model'
    );
    return {
      _id: s._id,
      title: s.title,
      updatedAt: s.updatedAt,
      createdAt: s.createdAt,
      messageCount: s.messages.length,
      lastSnippet: lastUserOrModel?.text?.slice(0, 120) || '',
    };
  });

  res.json(list);
};

export const getSession = async (req: Request, res: Response) => {
  const userId = req.user?.sub;
  const { id } = req.params;

  const session = await ChatSessionModel.findOne({ _id: id, userId }).lean();

  if (!session) {
    res.status(404).json({ error: 'Session not found' });
    return;
  }

  res.json(session);
};

export const createSession = async (req: Request, res: Response) => {
  const userId = req.user?.sub;
  const parsed = createSessionSchema.parse(req.body);

  const session = await ChatSessionModel.create({
    userId,
    title: parsed.title || 'Phiên trò chuyện',
    messages: parsed.messages,
  });

  res.status(201).json(session);
};

export const appendMessages = async (req: Request, res: Response) => {
  const userId = req.user?.sub;
  const { id } = req.params;
  const parsed = appendMessagesSchema.parse(req.body);

  const session = await ChatSessionModel.findOneAndUpdate(
    { _id: id, userId },
    { $push: { messages: { $each: parsed.messages } } },
    { new: true }
  );

  if (!session) {
    res.status(404).json({ error: 'Session not found' });
    return;
  }

  res.json(session);
};

export const updateTitle = async (req: Request, res: Response) => {
  const userId = req.user?.sub;
  const { id } = req.params;
  const parsed = updateTitleSchema.parse(req.body);

  const session = await ChatSessionModel.findOneAndUpdate(
    { _id: id, userId },
    { title: parsed.title },
    { new: true }
  );

  if (!session) {
    res.status(404).json({ error: 'Session not found' });
    return;
  }

  res.json(session);
};

export const deleteSession = async (req: Request, res: Response) => {
  const userId = req.user?.sub;
  const { id } = req.params;

  const result = await ChatSessionModel.deleteOne({ _id: id, userId });

  if (result.deletedCount === 0) {
    res.status(404).json({ error: 'Session not found' });
    return;
  }

  res.status(204).send();
};