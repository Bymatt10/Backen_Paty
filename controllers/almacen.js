const Almacen = require('../models/almacen');

module.exports = class AlmacenController {
    async list (req,res){
        const list = await  Almacen.findAll();
        res.send(list);
    }

    async get(req,res){
        const {id} = req.params;
        const  almacen = await  Almacen.findByPk(id);
        res.send(almacen);
    }
    async create(req,res){
        const {
            nombre_almacen,
            direcc_almacen
        }=req.body;
        const  almacen = await  Almacen.create({
            nombre_almacen,
            direcc_almacen
        });
        res.send(201).send(almacen);
    }
}