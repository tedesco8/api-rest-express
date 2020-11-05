const BaseRepository = require("./base.repository");
let _house = null;

class HouseRepository extends BaseRepository {
  constructor({ House }) {
    super(House);
    _house = House;
  }

  async getUserHouses(author) {
    return await _house.find({ author });
  }
}

module.exports = HouseRepository;
