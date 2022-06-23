const { response } = require('express');

const usuariosGet = (req, res = response) => {
  
  res.json({
    msg: 'HTTP GET API controller'
  });
};

const usuariosPost = (req, res = response) => {
  res.status(201).json({
    msg: 'HTTP POST API controller'
  });
};

const usuariosPut = (req, res) => {
  res.status(500).json({
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