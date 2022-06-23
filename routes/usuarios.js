
const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

// HTTP GET
router.get('/', usuariosGet);

// HTTP POST
router.post('/', usuariosPost);

// HTTP PUT
router.put('/', usuariosPut);

// HTTP DELETE
router.delete('/', usuariosDelete);


module.exports = router;