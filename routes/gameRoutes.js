const express = require('express');
const { getAllGames, createGame, updateGameById, deleteGameById, getGameById } = require('../controllers/gameController');

const gameRouter = express.Router();

gameRouter.get('/obtener-juegos', getAllGames);
gameRouter.post('/crear-juego', createGame);
gameRouter.put('/actualizar-juego', updateGameById);
gameRouter.delete('/borrar-juego', deleteGameById);

module.exports = gameRouter;