const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ HouseController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], HouseController.getAll);
  router.get("/:houseId", HouseController.get);
  router.get("/:userId/all", HouseController.getUserHouses);
  router.post("", AuthMiddleware, HouseController.create);
  router.patch("/:houseId", AuthMiddleware, HouseController.update);
  router.delete("/:houseId", AuthMiddleware, HouseController.delete);
  router.post("/:houseId/upvote", AuthMiddleware, HouseController.upvoteHouse);
  router.post("/:houseId/downvote", AuthMiddleware, HouseController.downvoteHouse);

  return router;
};
