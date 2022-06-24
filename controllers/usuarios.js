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

  // Verificar si el email existe

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
const usuariosPut = (req, res) => {
  const id = +req.params.id;

  res.json({
    msg: 'HTTP PUT API controller',
    id
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