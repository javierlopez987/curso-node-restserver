const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

// GET
const usuariosGet = async (req = request, res = response) => {
  const { limit = 10, offset = 0} = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query)
      .skip(+offset)
      .limit(+limit)
  ]);

  res.json({
    total,
    usuarios
  });
};

// POST
const usuariosPost = async (req, res = response) => {

  const { nombre, email, password, role } = req.body;
  const usuario = new Usuario({ nombre, email, password, role });

  // Encriptar la contraseña
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  usuario.password = hash;

  // Guardar en BD
  await usuario.save();

  res.status(201).json({
    usuario
  });
};

// PUT
const usuariosPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, ...body } = req.body;

  // TODO validar contra BD
  if (password) {
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    body.password = hash;
  }
  
  const usuario = await Usuario.findByIdAndUpdate(id, body);
  
  res.json(usuario);
};

// DELETE
const usuariosDelete = (req, res) => {
  res.json({
    msg: 'HTTP DELETE API controller'
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
};