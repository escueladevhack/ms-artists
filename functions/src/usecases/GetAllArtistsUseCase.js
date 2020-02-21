

module.exports = class {

    constructor(artistRepository) {
        this.artistRepository = artistRepository;
    }

    async execute() {
        return await this.artistRepository.getAll();
    }

}