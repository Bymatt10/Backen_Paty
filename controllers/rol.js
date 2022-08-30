const Rol = require('../models/rol')

module.exports = class PermisoController{
    async getAll (req,res){
        const list = await Rol.findAll();
        res.send(list);
    }
    async get (req,res){
        const {id} = req.params;
        const rol = await Rol.findByPk(id)
        res.send(rol);
    }
    async create(req,res){
        try{
            const {
                rol_nombre,
            }= req.body;
            const rol = await Rol.create({
                rol_nombre,
            });
            res.status(201).send(rol);
        }catch (e) {
            res.send(500).send(e.message);
        }
    }
}