const { Router } = require("express");

module.exports = function({ AuthController }) {
  const router = Router();

  router.post("/signin", AuthController.signIn);
  router.get("/generateKeyPair", AuthController.generateKeyPair);
  router.post("/encrypt", AuthController.encryptData);
  router.post("/decrypt", AuthController.decryptData);

  return router;
};
