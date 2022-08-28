const Almacen = require('../models/almacen');


module.exports = class PrecioController {
    async getAll(req, res) {
        const list = await Almacen.findAll();
        res.send(list);
    }

    async get(req, res) {
        const {id} = req.params;
        const almacen = await Almacen.findByPk(id);
        res.send(almacen);
    }

    async create(req, res) {
        try {
            const {
                nombre_almacen,
                direccion_almacen,

            } = req.body;
            const almacen = await Almacen.create({
                nombre_almacen,
                direccion_almacen,

            });
            res.status(201).send(almacen);
        }catch (e) {
            res.status(500).send(e.errors[0].message)

        }

    }
};
