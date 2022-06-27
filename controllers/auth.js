const { response, request } = require('express');


const login = async (req, res = response) => {


  res.json({
    msg: 'Login OK'
  });
}


module.exports = {
  login
}