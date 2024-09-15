const express = require('express');
const { getGames, createGame, updateGameById, deleteGameById, getGameById } = require('../controllers/gameController');

const gameRouter = express.Router();

gameRouter.get('/obtener-juegos', getGames);  
gameRouter.post('/crear-juego', createGame);
gameRouter.put('/actualizar-juego/:id', updateGameById);  
gameRouter.delete('/borrar-juego/:id', deleteGameById);  
gameRouter.get('/obtener-juego/:id', getGameById);


module.exports = gameRouter;