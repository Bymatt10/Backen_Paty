const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

module.exports = class AuthenticationController {
    async login(req, res) {
        const {usuario_nomb_usuario,
            usuario_contrasena} = req.body

        
        const Usuario = await Usuario.findOne({
            where: {
                usuario_nomb_usuario: usuario_nomb_usuario,
                usuario_estadob: 1
            }
        })

        if (!usuario_nomb_usuario) {
            return res.status(400).send({message: 'Usuario incorrecto'})
        }

        const match = await bcrypt.compare(usuario_contrasena, usuario_nomb_usuario.password)

        if (!match) {
            return res.status(400).send({message: 'Contraseña incorrecta'})
        }
        const token = jwt.sign({
                usuario_id: usuario_id, usuario_nomb_usuario
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            }
        )

        res.cookie('authtoken', token, {secure: true, expiresIn: 24 * 60 * 60})
        res.status(200).send({token})
    }

    async validate(req, res, next) {
        const authorization = req.headers.authorization

        if (!authorization) return res.status(401).send({message: 'No autorizado'})

        const [, token] = authorization.split('Bearer ')

        try {
            const valid = jwt.verify(token, process.env.JWT_SECRET)
            if (valid) {
                next()
            } else {
                res.status(401).send({message: 'No autorizado'})
            }
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                res.status(401).send({message: 'No autorizado'})
            }
        }
    }
}