const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = function(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    const error = new Error();
    error.message = "Token must be sent";
    error.status = 400;
    throw error;
  }

  jwt.verify(token, JWT_SECRET, function(err, decodedToken) {
    if (err) {
      const error = new Error();
      error.message = "Invalid token";
      error.status = 401;
      throw error;
    }

    req.user = decodedToken.user;
    next();
  });
};
