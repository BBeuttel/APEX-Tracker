import { Router } from 'express';

const router = Router();

import apexController from '../controller/apexController.js';

router.get('/player-info', (req, res) => {
  console.log('🍑 router.get working');git 
  return res.status(200).json('get request working');
});

router.post('/player-info', apexController.getPlayerInfo, apexController.legendPicks, (req, res) => {
  console.log('🥑 from apexController');
  return res.status(200).json(res.locals.playerInfo);
});

export default router;
