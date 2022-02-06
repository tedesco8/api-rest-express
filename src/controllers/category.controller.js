let _categoryService = null;
class CategoryController {
  constructor({ CategoryService }) {
    _categoryService = CategoryService;
  }

  async createComment(req, res) {
    const { body } = req;
    const { houseId } = req.params;
    const { id: userId } = req.user;
    const createdComment = await _categoryService.createComment(
      body,
      houseId,
      userId
    );
    return res.status(201).send(createdComment);
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _categoryService.get(commentId);
    return res.send(comment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updatedComment = await _categoryService.update(commentId, body);
    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deletedComment = await _categoryService.delete(commentId);
    return res.send(deletedComment);
  }

  async getHouseComments(req, res) {
    const { houseId } = req.params;
    const comments = await _categoryService.getHouseComments(houseId);
    return res.send(comments);
  }
}

module.exports = CategoryController;
