import config from '../config';
import shuffle from '../utils/shuffle';
import TileModel from './tile';

class GameModel {

    constructor() {
        this.tiles = null;
        this.player = null;

        this.assignTiles();
    }

    setPlayer(player) {
        this.player = player;
    }

    assignTiles() {
        this.tiles = shuffle(config.tiles).map(function(tile) {
            return new TileModel(tile);
        });
    }

    getTiles() {
        return this.tiles;
    }

}

export default GameModel;
