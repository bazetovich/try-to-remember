import $ from 'jquery';

'use strict';

class StageCtr {

    constructor(parent) {
        this.parent = parent;
        this.globalBlocker = parent.blocker;
    }

    update() {
        const player = this.parent.model.player;

        this.wrap.append($(
            `<div class="player">
                <div class="player-avatar-wrap"><img class="player-avatar" src="${player.getPhoto()}"></div>
                <div class="player-info-wrap">
                    <div class="player-name">${player.getName()}</div>
                    <div class="player-best-score">Best time: 1:00</div>
                </div>
            </div>`
        ));
    }

    init(node) {
        this.wrap = node;
    }

}

export default StageCtr;
