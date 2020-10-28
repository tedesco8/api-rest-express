const BaseRepository = require("./base.repository");
let _home = null;
class HomeRepository extends BaseRepository{
    constructor({Home}) {
        super(Home);
        _home = Home;
    }

    async getUserHome(author) {
        return await _home.find({author});
    }
}

module.exports = HomeRepository;