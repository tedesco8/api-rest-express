let _houseService = null;
class HouseController {
  constructor({ HouseService }) {
    _houseService = HouseService;
  }

  async get(req, res) {
    const { houseId } = req.params;
    const house = await _houseService.get(houseId);
    return res.send(house);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const houses = await _houseService.getAll(pageSize, pageNum);
    return res.send(houses);
  }

  async create(req, res) {
    const { body } = req;
    const createdHouse = await _houseService.create(body);
    return res.status(201).send(createdHouse);
  }

  async update(req, res) {
    const { body } = req;
    const { houseId } = req.params;
    const updatedHouse = await _houseService.update(houseId, body);
    return res.send(updatedHouse);
  }

  async delete(req, res) {
    const { houseId } = req.params;
    const deletedHouse = await _houseService.delete(houseId);
    return res.send(deletedHouse);
  }

  async getUserHouses(req, res) {
    const { houseId } = req.params;
    const houses = await _houseService.getUserHouses(houseId);
    return res.send(houses);
  }

  async upvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _houseService.upvoteHouse(houseId);
    return res.send(house);
  }

  async downvoteHouse(req, res) {
    const { houseId } = req.params;
    const house = await _houseService.downvoteHouse(houseId);
    return res.send(house);
  }
}

module.exports = HouseController;
