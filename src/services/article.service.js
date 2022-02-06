const BaseService = require("./base.service");
let _articleRepository = null;

class ArticleService extends BaseService {
  constructor({ ArticleRepository }) {
    super(ArticleRepository);
    _articleRepository = ArticleRepository;
  }

  async getUserHouses(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId must be sent";
      throw error;
    }

    return await _articleRepository.getUserHouses(author);
  }

  async upvoteHouse(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _articleRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    house.upvotes.push(true);

    return await _articleRepository.update(houseId, { upvotes: house.upvotes });
  }

  async downvoteHouse(houseId) {
    if (!houseId) {
      const error = new Error();
      error.status = 400;
      error.message = "houseId must be sent";
      throw error;
    }

    const house = await _articleRepository.get(houseId);

    if (!house) {
      const error = new Error();
      error.status = 404;
      error.message = "house does not exist";
      throw error;
    }

    house.downvotes.push(true);

    return await _articleRepository.update(houseId, { downvotes: house.downvotes });
  }
}

module.exports = ArticleService;
