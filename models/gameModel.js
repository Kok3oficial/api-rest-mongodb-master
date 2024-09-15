const mongoose = require('mongoose');
const gameSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen:{
        type: String
    }

},
    {
        timestamps: true
    }
)
const Game = mongoose.model('Game', gameSchema)

module.exports = Game;
exports.Game = Game;
