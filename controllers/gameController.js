const Juego = require('../models/Juego').default;


exports.createGame = async(req, res) => {
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
}


exports.getAllGames = async (req, res) => {
    try {
        const juegos = await Juego.find({});
        res.json({juegos}) 
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los videojuegos",
            error
        })
    }
}

exports.getGameById = async (req, res) => {
    try {
        const Game = await Game.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener el producto",
            error: error.message
        });

    }
};


exports. updateGameById = async (req, res) => {
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
}

exports.deleteGameById = async (req, res) => {
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
}