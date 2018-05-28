import config from './config';
import calc from '../../utils/calculations';

class Stage {

    constructor(gameWidth) {
        this.tileWidth = calc.getTileWidth(gameWidth, config.tileCount);
    }

    generateGrid() {
        for (let i = 0; i < config.tileCount; i++) {

        }
    }

    init(node) {
        this.wrap = node;

        this.generateGrid()
    }

}

export default Stage;
