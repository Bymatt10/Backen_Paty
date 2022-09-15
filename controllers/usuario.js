const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
module.exports = class UsuarioController{
    async getAll (req,res){
        const list = await Usuario.getAll();
        res.send(list)

    }

    async create (req, res, next) {
        const {
            usuario_cod,
            usuario_nomb_usuario,
            usuario_contrasena
        } = req.body
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(usuario_contrasena, salt)
        const usuario = await Usuario.create({
            usuario_cod,
            usuario_nomb_usuario,
            usuario_contrasena:hash
        })
        res.status(201).send(usuario)
      }
}
