class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findById(id);
    }

    async getAll() {
        return await this.model.find();
    }

    async create() {
        return await this.model.create(entity);
    }

    async update(id, entity) {
        return await this.model.findByIdAndUpdate(id, entity, {new: true});
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports = BaseRepository