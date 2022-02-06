const BaseService = require("./base.service");
let _commentRepository = null,
  _articleRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, ArticleRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
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

    const createdComment = await _commentRepository.create({
      ...comment,
      author: userId
    });
    house.comments.push(createdComment);

    return await _articleRepository.update(houseId, { comments: house.comments });
  }
}

module.exports = CommentService;
