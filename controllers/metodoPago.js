const MetodoPago = require('../models/metodoPago')

module.exports = class MetodoPagoController{
    async getAll (req,res){
        const list = await MetodoPago.findAll();
        res.send(list);
    }
    async get (req,res){
        const {id} = req.params;
        const metodopago = await MetodoPago.findByPk(id)
        res.send(metodopago);
    }
    async create(req,res){
        try{
            const {
            metodopago_nombre,
            }= req.body;
            const metodopago = await MetodoPago.create({
                metodopago_nombre,
            });
            res.status(201).send(metodopago);
        }catch (e) {
            res.send(500).send(e.message);
        }
    }
}