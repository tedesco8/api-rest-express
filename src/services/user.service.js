const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getByUsername(userName) {
    return await _userRepository.getByUsername(userName);
  }
}

module.exports = UserService;
