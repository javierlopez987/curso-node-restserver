
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

// HTTP GET
router.get('/', usuariosGet);

// HTTP POST
router.post('/', [
  check('email', 'El email no es válido').isEmail()
], usuariosPost);

// HTTP PUT
router.put('/:id', usuariosPut);

// HTTP DELETE
router.delete('/', usuariosDelete);


module.exports = router;