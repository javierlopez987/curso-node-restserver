const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
  const { page = 1, limit = 10} = req.query;

  res.json({
    msg: 'HTTP GET API controller',
    page,
    limit
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
  const id = +req.params.id;

  res.json({
    msg: 'HTTP PUT API controller',
    id
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