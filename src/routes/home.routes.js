const { Router } = require("express");

module.exports = function({ HomeController }) {
  const router = Router();

  router.get("/", HomeController.index);

  return router;
};
