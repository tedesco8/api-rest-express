const BaseService = require("./base.service");
let _categoryRepository = null,
  _articleRepository = null;

class CategoryService extends BaseService {
  constructor({ CategoryRepository, ArticleRepository }) {
    super(CategoryRepository);
    _categoryRepository = CategoryRepository;
    _articleRepository = ArticleRepository;
  }

  async getHouseComments(houseId) {
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

    const { comments } = house;
    return comments;
  }

  async createComment(comment, houseId, userId) {
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

    const createdComment = await _categoryRepository.create({
      ...comment,
      author: userId
    });
    house.comments.push(createdComment);

    return await _articleRepository.update(houseId, { comments: house.comments });
  }
}

module.exports = CategoryService;
