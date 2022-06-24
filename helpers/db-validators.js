const Role = require('../models/role');

const isRoleValid = async (role = '') => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error(`El rol ${ role } no está registrado en la BD`)
  }
};


module.exports = {
  isRoleValid
};