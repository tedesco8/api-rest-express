const BaseRepository = require("./base.repository");
let _user = null;

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getByUsername(userName) {
    return await _user.findOne({ userName });
  }
}

module.exports = UserRepository;
