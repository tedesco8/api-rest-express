const BaseRepository = require("./base.repository");
let _article = null;

class ArticleRepository extends BaseRepository {
  constructor({ ArticleModel }) {
    super(ArticleModel);
    _article = ArticleModel;
  }

  async getUserHouses(author) {
    return await _article.find({ author });
  }
}

module.exports = ArticleRepository;
