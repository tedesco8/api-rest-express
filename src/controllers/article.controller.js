let _articleService = null;
class ArticleController {
  constructor({ ArticleService }) {
    _articleService = ArticleService;
  }

  async get(req, res) {
    const { houseId } = req.params;
    const house = await _articleService.get(houseId);
    return res.send(house);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const houses = await _articleService.getAll(pageSize, pageNum);
    return res.send(houses);
  }

  async create(req, res) {
    const { body } = req;
    const createdHouse = await _articleService.create(body);
    return res.status(201).send(createdHouse);
  }

  async update(req, res) {
    const { body } = req;
    const { houseId } = req.params;
    const updatedHouse = await _articleService.update(houseId, body);
    return res.send(updatedHouse);
  }

  async delete(req, res) {
    const { houseId } = req.params;
    const deletedHouse = await _articleService.delete(houseId);
    return res.send(deletedHouse);
  }

  async getUserHouses(req, res) {
    const { houseId } = req.params;
    const houses = await _articleService.getUserHouses(houseId);
    return res.send(houses);
  }

  async upvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _articleService.upvoteHouse(houseId);
    return res.send(house);
  }

  async downvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _articleService.downvoteHouse(houseId);
    return res.send(house);
  }
}

module.exports = ArticleController;
