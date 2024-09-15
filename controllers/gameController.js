const Juego = require('../models/Juego').default;


exports.createGame = async(req, res) => {
    const { nombre, precio, imagen } = req.body
    try {
        const nuevoJuego = await Juego.create({ nombre, precio, imagen });
        res.status(201).json(nuevoJuego);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando el videojuego",
            error: error.message
        });
    }
};


exports.getGames = async (req, res) => {
    try {
        const juegos = await Juego.find({});
        res.json({juegos}) 
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los videojuegos",
            error: error.message
        });
    }
}

exports.getGameById = async (req, res) => {
    try {
        const juego = await Juego.findById(req.params.id);

        if (!juego) {
            return res.status(404).json({
                error: 'Juego no encontrado'
            });
        }
        res.status(200).json(juego); 
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener el juego",
            error: error.message
        });
        
    }
};

exports.updateGameById = async (req, res) => {
    const { nombre, precio } = req.body;
    try {
        const actualizacionJuego = await Juego.findByIdAndUpdate(req.params.id, { nombre, precio }, { new: true });  // Cambié a `req.params.id`
        res.json(actualizacionJuego);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error actualizando el videojuego",
            error
        });
    }
};

exports.deleteGameById = async (req, res) => {

    try {
        const juegoBorrado = await Juego.findByIdAndDelete(req.params.id);  // Cambié a `req.params.id`
        res.json(juegoBorrado);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error eliminando el videojuego",
            error
        });
    }
};
