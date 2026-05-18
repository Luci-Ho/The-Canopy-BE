import { Router } from 'express';
import { authGuard } from '../middlewares/auth.middleware.js';
import {
  listSessions,
  getSession,
  createSession,
  appendMessages,
  updateTitle,
  deleteSession,
} from '../controllers/chat.controller.js';

const router = Router();

// All routes require authentication
router.use(authGuard);

router.get('/sessions', listSessions);
router.post('/sessions', createSession);
router.get('/sessions/:id', getSession);
router.patch('/sessions/:id/messages', appendMessages);
router.patch('/sessions/:id/title', updateTitle);
router.delete('/sessions/:id', deleteSession);

export const chatRouter = router;