const express = require('express');
const { getGames, createGame, getGameById, updateGameById, deleteGameById } = require('../controllers/gameController');

const gameRouter = express.Router();

gameRouter.get('/readall', getGames);

gameRouter.post('/create', createGame);

gameRouter.get('/readone/:id', getGameById);

gameRouter.put('/update/:id', updateGameById);

gameRouter.delete('/delete/:id', deleteGameById)


module.exports = gameRouter;
