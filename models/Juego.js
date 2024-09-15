const mongoose = require('mongoose');
const juegoSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            },
        precio: {
            type: Number
        },
        imagen: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Juego = mongoose.model('Juego', juegoSchema)

module.exports = Juego;
exports.Juego = Juego;