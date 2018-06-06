class TileModel {

    constructor(data) {
        this.data = {
            id: null,
            imgPath: ''
        };

        this.id(data.id);
        this.imgPath(data.imgPath);
    }

    id(id) {
        if (id !== undefined) {
            this.data.id = id;
        }

        return this.data.id;
    }

    imgPath(path) {
        if (path !== undefined) {
            this.data.imgPath = path;
        }

        return this.data.imgPath;
    }

    equal(tile) {
        if (!tile) {
            return false;
        }

        return this.id() === tile.id();
    }

}

export default TileModel;
