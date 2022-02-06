const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ ArticleController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], ArticleController.getAll);
  router.get("/:houseId", ArticleController.get);
  router.get("/:userId/all", ArticleController.getUserHouses);
  router.post("", AuthMiddleware, ArticleController.create);
  router.patch("/:houseId", AuthMiddleware, ArticleController.update);
  router.delete("/:houseId", AuthMiddleware, ArticleController.delete);
  router.post("/:houseId/upvote", AuthMiddleware, ArticleController.upvoteHouse);
  router.post("/:houseId/downvote", AuthMiddleware, ArticleController.downvoteHouse);

  return router;
};
