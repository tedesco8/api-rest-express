const express = require("express");
const morgan = require('morgan');

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express().use(router);
  }

  start() {
    return new Promise(resolve => {
      _express.listen(_config.PORT, () => {
        console.log(
          _config.APPLICATION_NAME + " API running on port " + _config.PORT
        );

        resolve();
      });
      _express.use(morgan('dev'));
    });
  }
}

module.exports = Server;
