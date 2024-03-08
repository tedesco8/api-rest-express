const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = function(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    const error = new Error();
    error.message = "Bearer token must be sent";
    error.status = 400;
    throw error;
  }

  const token = bearerHeader.split(" ")[1]

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
