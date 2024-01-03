const { Animal } = require('../models/animals')


const ApiController = {
    async apiGet(req, res) {

        const listadoDeGatos = await Animal.find()
        res.status(200).json(listadoDeGatos)
    },

    async buscarPorId(req, res) {
        console.log('estoy en el controlador')
        const buscar = await Animal.findById(req.params.id)
        res.status(200).json(buscar)
    },
    async apiPost(req, res) {
        try {
            const nuevoGatito = new Animal(req.body)
            await nuevoGatito.save()
            res.status(201).json(nuevoGatito);
        } catch (error) {
            res.status(400).json(error);
        }

    },
    async apiPut(req, res) {
        await Animal.findByIdAndUpdate(req.params.id, req.body)
        const buscar = await Animal.findById(req.params.id)
        res.status(200).json(buscar)
    },
    async apiDelete(req, res) {
        await Animal.findByIdAndDelete(req.params.id)
        res.status(204).json({
            msg: "el gatito con el id " + req.params.id + " ya fue borrado."
        })
    },

};

module.exports = ApiController;