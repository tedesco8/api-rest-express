const { HouseRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { House } = require("../../../src/models");
let {
  HouseModelMock: { houses, house }
} = require("../../mocks");

describe("House Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a house by id", async () => {
    const _house = { ...house };
    delete _house.password;
    mockingoose(House).toReturn(house, "findOne");

    const _houseRepository = new HouseRepository({ House });
    const expected = await _houseRepository.get(_house._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_house);
  });

  it("Should return a house by id", async () => {
    const _house = { ...house };
    delete _house.password;
    mockingoose(House).toReturn(house, "findOne");

    const _houseRepository = new HouseRepository({ House });
    const expected = await _houseRepository.create(_house);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_house);
  });

  it("Should find a house by user", async () => {
    const _house = { ...house };
    mockingoose(House).toReturn(house, "findOne");

    const _houseRepository = new HouseRepository({ House });
    const expected = await _houseRepository.getUserHouses(_house.author);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_house);
  });

  it("Should return a house collection", async () => {
    houses = houses.map(house => {
      return house;
    });

    mockingoose(House).toReturn(houses, "find");

    const _houseRepository = new HouseRepository({ House });
    const expected = await _houseRepository.getAll();
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(houses);
  });

  it("Should update an especific house by id", async () => {
    const _house = { ...house };
    delete _house.password;
    mockingoose(House).toReturn(_house, "findOneAndUpdate");
    const _houseRepository = new HouseRepository({ House });
    const expected = await _houseRepository.update(house._id, {
      title: "Modificacion titulo"
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_house);
  });

  it("Should delete an especific house by id", async () => {
    mockingoose(House).toReturn(house, "findOneAndDelete");
    const _houseRepository = new HouseRepository({ House });
    const expected = await _houseRepository.delete(house._id);
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
