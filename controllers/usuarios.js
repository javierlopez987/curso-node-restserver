const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

// GET
const usuariosGet = (req = request, res = response) => {
  const { page = 1, limit = 10} = req.query;

  res.json({
    msg: 'HTTP GET API controller',
    page,
    limit
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
    msg: 'HTTP POST API controller',
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
  
  res.json({
    msg: 'HTTP PUT API controller',
    usuario
  });
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