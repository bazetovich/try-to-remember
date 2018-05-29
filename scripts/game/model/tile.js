class TileModel {

    constructor(data) {
        this.data = {
            id: null
        };

        this.id(data.id);
    }

    id(id) {
        if (id !== undefined) {
            this.data.id = id;
        }

        return this.data.id;
    }

}

export default TileModel;
