import Stage from './components/stage/stage';

class Game {

    constructor(FBInstant) {
        this.fb = FBInstant;
    }

    // handlers

    // game cycle

    start() {}

    // other

    toggleContextMenu(flag) {
        if (flag) {
            this.contextMenu.show();
        }
        else {
            this.contextMenu.hide();
        }
    }

    init(node) {
        this.stage = new Stage(node.width());

        this.stage.init(node.find('.stage'));
        this.fb
            .initializeAsync()
            .then(() => {
                this.fb.setLoadingProgress(100);

                return this.fb.startGameAsync()
            });
    }

}

export default Game;
