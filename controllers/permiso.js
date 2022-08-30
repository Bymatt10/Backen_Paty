const Permiso = require('../models/permiso')

module.exports = class PermisoController{
    async getAll (req,res){
        const list = await Permiso.findAll();
        res.send(list);
    }
    async get (req,res){
        const {id} = req.params;
        const permiso = await Permiso.findByPk(id)
        res.send(permiso);
    }
    async create(req,res){
        try{
            const {
                permiso_nombre,
            }= req.body;
            const permiso = await Permiso.create({
                permiso_nombre,
            });
            res.status(201).send(permiso);
        }catch (e) {
            res.send(500).send(e.message);
        }
    }
}