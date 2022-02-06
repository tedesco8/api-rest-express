const BaseRepository = require("./base.repository");
let _category = null;

class CategoryRepository extends BaseRepository {
  constructor({ CategoryModel }) {
    super(CategoryModel);
    _category = CategoryModel;
  }
}

module.exports = CategoryRepository;
