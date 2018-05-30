import StageCtr from './components/stage/stage';
import GameModel from './model/model';
import Blocker from './blocker';

'use strict';

class Game {

    constructor() {
        this.fb = null;
        this.stageCtr = null;
        this.model = new GameModel();
        this.blocker = new Blocker();
    }

    // handlers

    // game cycle

    start() {}

    // other

    init(node) {
        this.stageCtr = new StageCtr(this);

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
