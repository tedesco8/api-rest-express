module.exports = (req, res, next) =>
  res.status(404).send({ status: 404, message: "Resource not found" });
