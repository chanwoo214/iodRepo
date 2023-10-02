import { GamesService } from "../services/games-service.js";

const gamesService = new GamesService();

export default class GamesController {
  getGames(req, res) {
    const publisher = req.query.publisher;
    const genre = req.query.genre;
    const title = req.query.title;

    let games = gamesService.getAllGames();

    if (publisher) {
      games = games.filter(game => game.publisher.toLowerCase() == publisher.toLowerCase());
    }

    if (genre) {
      games = games.filter(game => game.genre.toLowerCase() == genre.toLowerCase());
    }

    if (title) {
      games = games.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));
    }
    res.json(games);
  }

  getGamesById(req, res) {
    const gameId = req.params.id;

    let games = gamesService.getAllGames();


    if (gameId) {
      games = games.filter(game => game.id.toString() == gameId);

      res.json(games);
    }
  }







}

