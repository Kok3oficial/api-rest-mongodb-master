const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/db');

const Juegos = require('./')

const Juego = require('./models/Juego');

const userRouter = require('./routes/userRoutes');
const gameRouter = require('./routes/gameRoutes');

require('dotenv').config();

connectDB();



// const corsOptions = {
//     origin: function (origin, callback) {
//       // Permitir solicitudes sin origen (como Postman) o si el origen está en la lista permitida
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     }
//   };

app.use(cors());
app.use(express.json())

app.use('/api/user', userRouter) // http://localhost:3000/api/user
app.use('/api/product', gameRouter); //http://localhost:3000/api/product

app.get("/obtener-juegos", async(req, res) => {
    const { nombre, precio, imagen } = req.body
    try {
        const obtenerJuegos = await Juegos.get({ nombre, precio, imagen })
        res.json(obtenerJuegos)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error obteniendo los videojuegos",
            error: error.message
        })
    }
})

app.post("/crear-juego", async(req, res) => {
    const { nombre, precio, imagen } = req.body
    try {
        const nuevoJuego = await Juego.create({ nombre, precio, imagen })
        res.json(nuevoJuego)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando el videojuego",
            error: error.message
        })
    }
})

app.put("/actualizar-juego", async (req, res) => {
    const { id, nombre, precio } = req.body
    try {
        const actualizacionJuego = 
	        await Juego.findByIdAndUpdate(id, { nombre, precio }, { new: true })
        res.json(actualizacionJuego)
    } catch (error) {       
        res.status(500).json({
            msg: "Hubo un error actualizando el videojuego",
            error
        })
    }
})

app.delete("/borrar-juego", async (req, res) => {
    const { id } = req.body
    try {
        const juegoBorrado = await Juego.findByIdAndDelete({_id: id })
        res.json(juegoBorrado)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error eliminando el videojuego",
            error
        })
    }
})


app.listen(process.env.PORT, () => console.log('Servidor escuchando en el puerto ' + process.env.PORT))