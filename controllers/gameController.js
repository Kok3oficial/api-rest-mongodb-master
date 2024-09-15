const Game = require('../models/gameModel');


exports.createGame = async (req, res) => {
    const { nombre, precio, descripcion, imagen } = req.body
    try {
        const newGame = await Game.create({ nombre, precio, descripcion, imagen });
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando el producto",
            error: error.message
        });
    }
};


exports.getGames = async (req, res) => {
    try {
        const games = await Game.find({});
        res.json({ games });
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los productos",
            error: error.message
        });

    }
};

exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);

        if (!game) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener el producto",
            error: error.message
        });

    }
};

exports.updateGameById = async (req, res) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).json({
                error: 'Producto no se encuentra',
                error: error.message
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar el producto',
            error: error.message
        });
    }
};

exports.deleteGameById = async (req, res) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);

        if (game) {
            res.status(200).json({
                message: 'Producto Borrado'
            });
        } else {
            res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al borrar el producto'
        });
    }
};
