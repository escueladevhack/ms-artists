const ARTIST_COLLECTION = "artists"

module.exports = class {

    constructor(firestore) {
        this.db = firestore;
    }

    async getAll() {
        return await this.db.collection(ARTIST_COLLECTION).get()
    }

}