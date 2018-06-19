import StageCtr from './components/stage/stage';
import ScoreBoardCtr from './components/scoreboard/scoreboard';
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

    start() {
        this.model.setPlayer(this.fb.player);
        this.scoreBoardCtr.update();

        // timer ?
    }

    // basic

    init(node) {
        this.stageCtr = new StageCtr(this);
        this.scoreBoardCtr = new ScoreBoardCtr(this);

        this.scoreBoardCtr.init(node.find('.scoreboard'));
        this.stageCtr.init(node.find('.stage'));
        this.fb
            .initializeAsync()
            .then(() => {
                this.fb.setLoadingProgress(100);

                return this.fb.startGameAsync()
            })
            .then(() => this.start());
    }

    destroy() {
        // todo: destroying
    }

}

export default Game;
