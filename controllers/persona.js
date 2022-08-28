const Persona = require('../models/persona');

module.exports = class PersonaController {
  async list(req, res) {
    const list = await Persona.findAll();
    res.send(list);
  }

  async get(req, res) {
    const { id } = req.params;
    const persona = await Persona.findByPk(id);
    res.send(persona);
  }

  async create(req, res, next) {
    const {
      persona_nombre,
      persona_apellido,
      persona_genero,
      persona_correo,
      persona_telefono,
      persona_direccion,
    } = req.body;
    const persona = await Persona.create({
      persona_nombre,
      persona_apellido,
      persona_genero,
      persona_correo,
      persona_telefono,
      persona_direccion,
    });
    res.status(201).send(persona);
  }
};
