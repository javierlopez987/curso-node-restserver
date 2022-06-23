const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // Directorio público
    this.app.use(express.static('public'));
  }

  routes() {
    // HTTP GET
    this.app.get('/api', (req, res) => {
      res.json({
        msg: 'HTTP GET API call'
      });
    });

    // HTTP PUT
    this.app.put('/api', (req, res) => {
      res.json({
        msg: 'HTTP PUT API call'
      });
    });

    // HTTP POST
    this.app.post('/api', (req, res) => {
      res.json({
        msg: 'HTTP POST API call'
      });
    });

    // HTTP DELETE
    this.app.delete('/api', (req, res) => {
      res.json({
        msg: 'HTTP DELETE API call'
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

module.exports = Server;