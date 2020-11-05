const BaseService = require("./base.service");
let _houseRepository = null;

class HouseService extends BaseService {
  constructor({ HouseRepository }) {
    super(HouseRepository);
    _houseRepository = HouseRepository;
  }

  async getUserHouses(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId must be sent";
      throw error;
    }

    return await _houseRepository.getUserHouses(author);
  }

  async upvoteHouse(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _houseRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    house.upvotes.push(true);

    return await _houseRepository.update(houseId, { upvotes: house.upvotes });
  }

  async downvoteHouse(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _houseRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    house.downvotes.push(true);

    return await _houseRepository.update(houseId, { downvotes: house.downvotes });
  }
}

module.exports = HouseService;
