
const { Router } = require('express');
const { check } = require('express-validator');

const Role = require('../models/role');
const { validarCampos }  = require('../middlewares/validar-campos');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

// HTTP GET
router.get('/', usuariosGet);

// HTTP POST
router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe contener más de 6 letras').isLength({ min: 6 }),
  check('email', 'El email no es válido').isEmail(),
  // check('role', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom( async (role = '') => {
    const existeRole = await Role.findOne({ role });
    if (!existeRole) {
      throw new Error(`El rol ${ role } no está registrado en la BD`)
    }
  }),
  validarCampos
], usuariosPost);

// HTTP PUT
router.put('/:id', usuariosPut);

// HTTP DELETE
router.delete('/', usuariosDelete);


module.exports = router;