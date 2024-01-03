const {Animal} = require('../models/animals');

const validarID = async (req, res, next) =>{
    console.log('estoy en el middleware')
    try {
        const buscar = await Animal.findById(req.params.id);
        if (buscar !== null) {
            next() // nextFunction ==
           } else {
            res.status(400).json({
                msg: "el id " + req.params.id + " es invalido",
            });
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {validarID};