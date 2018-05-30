import StageCtr from './components/stage/stage';
import GameModel from './model/model';
import Blocker from './blocker';

'use strict';

class Game {

    constructor() {
        this.fb = null;
        this.model = new GameModel();
        this.stageCtr = new StageCtr(this);
        this.blocker = new Blocker();
    }

    // handlers

    // game cycle

    start() {}

    // other

    init(node) {
        this.stageCtr.init(node.find('.stage'));
        this.fb
            .initializeAsync()
            .then(() => {
                this.fb.setLoadingProgress(100);

                return this.fb.startGameAsync()
            });
    }

}

export default Game;
