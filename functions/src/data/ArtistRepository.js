const Artist = require("../usecases/domain/Artist");

module.exports = class {

    constructor(dataSource) {
        this.dataSource = dataSource
    }

    async getAll() {
        const artists_db = await this.dataSource.getAll();
        const artist = []
        artists_db.forEach(doc => {
            artist.push(new Artist(
                doc.data().name,
                doc.data().description,
                doc.data().photoUrl
            ))
        });
        return artist;
    }

}