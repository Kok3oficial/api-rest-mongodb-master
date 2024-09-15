const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/db');
const Game = require('./models/gameModel');

const userRouter = require('./routes/userRoutes');
const gameRouter = require('./routes/gameRoutes');

require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/game', gameRouter);

app.get('/test', (req, res) => {
    res.send('La ruta de prueba funciona!');
});

app.listen(process.env.PORT, () => console.log('Servidor escuchando en el puerto ' + process.env.PORT));