const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');


const login = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    // Verificar si el email existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - email'
      });
    }

    // Verificar si el usuario está activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - estado: false'
      });
    }

    // Verificar la contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - password'
      });
    }

    // Generar el JWT
    
    res.json({
      msg: 'Login OK'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'ERROR. Comuníquese con el administrador'
    })
  }
  
}


module.exports = {
  login
}