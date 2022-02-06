const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function({ CategoryController }) {
  const router = Router();

  router.get("/:commentId/unique", CategoryController.get);
  router.get("/:houseId", CategoryController.getHouseComments);
  router.post("/:houseId", AuthMiddleware, CategoryController.createComment);
  router.patch("/:commentId", AuthMiddleware, CategoryController.update);
  router.delete("/:commentId", AuthMiddleware, CategoryController.delete);

  return router;
};
