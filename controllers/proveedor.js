const Proveedor = require('../models/proveedor');
const Almacen = require("../models/almacen");

module.exports = class Proveedorontroller {
    async getAll(req, res) {
        const list = await Proveedor.findAll();
        res.send(list);
    }


    async get(req, res) {
        const { id } = req.params;
        const proveedor = await Proveedor.findByPk(id);
        res.send(proveedor);
    }

    async create(req, res, next) {
        const {
            proveedor_razon_social,
            proveedor_Nombre,
            proveedor_Telefono,
            proveedor_descripcion,
            proveedor_Correo,

        } = req.body;
        const proveedor = await Proveedor.create({
            proveedor_razon_social,
            proveedor_Nombre,
            proveedor_Telefono,
            proveedor_descripcion,
            proveedor_Correo,

        });
        res.status(201).send(proveedor);
    }
};
