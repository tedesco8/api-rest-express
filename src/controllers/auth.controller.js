let _authService = null;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signIn(req, res) {
    const { body } = req;
    const creds = await _authService.signIn(body);
    return res.send(creds);
  }

  async generateKeyPair(req, res) {
    const keyPair = await _authService.generateKeyPair();
    return res.send(keyPair);
  }

  async encryptData(req, res) {
    const { data } = req.body;
    const creds = await _authService.encryptData(data);
    return res.send(creds);
  }

  async decryptData(req, res) {
    const { data } = req.body;
    const creds = await _authService.decryptData(data);
    return res.send(creds);
  }
}

module.exports = AuthController;
