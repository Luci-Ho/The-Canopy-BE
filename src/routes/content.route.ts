import { Router } from 'express';
import { getAudioTracks, getLeafCards, getOracleSuggestions, getZodiacData, getZodiacByStar } from '../controllers/content.controller';

export const contentRouter = Router();

contentRouter.get('/audio-tracks', getAudioTracks);
contentRouter.get('/leaf-cards', getLeafCards);
contentRouter.get('/oracle-suggestions', getOracleSuggestions);
contentRouter.get('/zodiac', getZodiacData);
contentRouter.get('/zodiac/:star', getZodiacByStar);
