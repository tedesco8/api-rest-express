const BaseService = require('./base.service');
let _homeRepository = null;

class HomeService extends BaseService{
    constructor({HomeRepository}) {
        super(HomeRepository);
        _homeRepository = HomeRepository;
    }

    async getUserHomes(author) {
        if(!author) {
            const error = new Error();
            error.status = 400;
            error.message = "userId must be sent";
            throw error;
        }

        return await _homeRepository.getUserHomes(author);
    }
}

module.exports = HomeService;