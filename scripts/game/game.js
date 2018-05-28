import Map from './map/map';

class Game {

    constructor(FBInstant) {
        this.fb = FBInstant;
    }

    // handlers

    selectBtnClickHandler() {
        const _this = this;

        this.fb.context
            .chooseAsync({
                minSize: 2,
                maxSize: 2
            })
            .then(function() {
                _this.start();
            })
    }

    // game cycle

    start() {
        const _this = this;

        this.fb.context.getPlayersAsync()
            .then(function(players) {
                if (_this.fb.context.getType() !== 'SOLO') {
                    _this.toggleContextMenu(false);
                }

                /*console.log(players.map(function(player) {
                    return {
                        id: player.getID(),
                        name: player.getName(),
                    }
                }));*/
            });
    }

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
        const _this = this;

        this.contextMenu = node.find('.context-menu-layer');
        this.map = new Map(node);

        this.contextMenu
            .find('.select-btn')
            .on('click', this.selectBtnClickHandler.bind(this));

        this.fb.initializeAsync().then(function() {
            _this.fb.setLoadingProgress(100);
            _this.fb.startGameAsync().then(function() {

                // check whether it a match or new game? how?????

                // _this.fb.context.getType() !== 'SOLO'
                // getEntryPointAsync() returns string

                _this.toggleContextMenu(true);
            });
        });
    }

}

export default Game;
