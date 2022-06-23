const { response } = require('express');

const usuariosGet = (req, res = response) => {
  res.json({
    msg: 'HTTP GET API controller'
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: 'HTTP POST API controller',
    nombre,
    edad
  });
};

const usuariosPut = (req, res) => {
  res.json({
    msg: 'HTTP PUT API controller'
  });
};

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