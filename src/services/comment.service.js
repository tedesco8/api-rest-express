const BaseService = require("./base.service");
let _commentRepository = null,
  _houseRepository = null;

class CommentService extends BaseService {
  constructor({ CommentRepository, HouseRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _houseRepository = HouseRepository;
  }

  async getHouseComments(houseId) {
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

    const house = await _houseRepository.get(houseId);

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

    return await _houseRepository.update(houseId, { comments: house.comments });
  }
}

module.exports = CommentService;
