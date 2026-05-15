import { Request, Response } from 'express';
import { audioTracks, leafCards, oracleSuggestions, zodiacData } from '../data/mockData';

export async function getAudioTracks(req: Request, res: Response) {
  try {
    res.json(audioTracks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching audio tracks' });
  }
}

export async function getLeafCards(req: Request, res: Response) {
  try {
    res.json(leafCards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaf cards' });
  }
}

export async function getOracleSuggestions(req: Request, res: Response) {
  try {
    res.json(oracleSuggestions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching oracle suggestions' });
  }
}

export async function getZodiacData(req: Request, res: Response) {
  try {
    res.json(zodiacData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching zodiac data' });
  }
}

export async function getZodiacByStar(req: Request, res: Response) {
  try {
    const { star } = req.params;
    const data = zodiacData[star as keyof typeof zodiacData];
    
    if (!data) {
      return res.status(404).json({ message: 'Zodiac sign not found' });
    }
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching zodiac data' });
  }
}
