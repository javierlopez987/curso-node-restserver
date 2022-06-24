
const { Schema, model } = require('mongoose');
const role = require('./role');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña obligatoria']
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  },
});


module.exports = model('Usuario', UsuarioSchema);