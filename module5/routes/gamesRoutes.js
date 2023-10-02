import { Router } from 'express';
import { GamesService } from '../services/games-service.js';
import GamesController from '../controllers/gamesController.js';
var router = Router();

const gamesController = new GamesController();

router.get("/games", function (req, res) {
    gamesController.getGames(req,res);
})

router.get("/games/:id", function (req,res) {
    gamesController.getGamesById(req,res);
})

export default router;