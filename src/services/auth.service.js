const { generateKeyPairRSA, generateToken, encrypt,
  decrypt } = require("../helpers");
let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signIn(user) {
    const { userName, password } = user;

    if (!userName || !password) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid fields";
      throw error;
    }

    const userExist = await _userService.getByUsername(userName);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    const aparentPass = decrypt(password);
    const validPassword = userExist.comparePasswords(aparentPass);
    if (!validPassword) {
      const error = new Error();
      error.status = 403;
      error.message = "Invalid Password";
      throw error;
    }

    const userToEncode = {
      id: userExist._id,
      name: userExist.name,
      userName: userExist.userName,
    };

    const token = generateToken(userToEncode);

    return { token, user: userExist };
  }

  async generateKeyPair() {
    return await generateKeyPairRSA();
  }

  async encryptData(data) {
    if (!data.trim()) {
      const error = new Error();
      error.status = 404;
      error.message = "Nothing to encrypt";
      throw error;
    }

    return encrypt(data);
  }

  async decryptData(data) {
    if (!data.trim()) {
      const error = new Error();
      error.status = 404;
      error.message = "Nothing to decrypt";
      throw error;
    }

    return decrypt(data);
  }
}

module.exports = AuthService;
