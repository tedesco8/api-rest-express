const BaseService = require("./base.service");
const { decrypt } = require("../helpers");

let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getByUsername(userName) {
    return await _userRepository.getByUsername(userName);
  }

  async create(user) {
    const { userName } = user;
    const isComingPass = user?.password;
    let randomPassword = null;

    const userExist = await _userRepository.getByUsername(userName);
    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "User already exist";
      throw error;
    }

    if (!isComingPass) {
      randomPassword = Math.random().toString(36).slice(-8);
      user.password = randomPassword;
    } else {
      const decrypted = decrypt(user.password);
      user.password = decrypted;
    }

    const userCreated = await _userRepository.create(user);

    return userCreated;
  }
}

module.exports = UserService;
