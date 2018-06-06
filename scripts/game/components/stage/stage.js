import $$ from 'dom7';
import TileCtr from '../tile/tile';

'use strict';

class StageCtr {

    constructor(parent) {
        this.parent = parent;
        this.globalBlocker = parent.blocker;
        this.flipped = [];
    }

    clickTileHandler(e) {
        e.stopPropagation();

        if (!this.globalBlocker.isBlocked()) {
            let tile = $$(e.target).closest('.tile');
            let tileCtr = tile.data('controller');

            if (tileCtr) {
                this.globalBlocker.block();

                tileCtr
                    .flip()
                    .then(() => {
                        return this.checkFlipped(tileCtr);
                    })
                    .then(() => {
                        this.globalBlocker.unBlock();
                    });
            }
        }
    }

    isFlippedEqual() {
        let first = this.flipped[0] && this.flipped[0].model;
        let second = this.flipped[1] && this.flipped[1].model;

        return Boolean(
            first &&
            second &&
            first.equal(second)
        );
    }

    throwAwayFlipped() {
        return Promise.all(this.flipped.map(function(ctr) {
            return ctr.throwAway();
        }))
    }

    returnBackFlipped() {
        return Promise.all(this.flipped.map(function(ctr) {
            return ctr.flipBack();
        }))
    }

    checkFlipped(ctr) {
        let _this = this;

        return new Promise(function(resolve) {
            _this.flipped.push(ctr);

            if (_this.flipped.length === 2) {
                if (_this.isFlippedEqual()) {
                    _this.throwAwayFlipped().then(function() {
                        resolve();
                        _this.flipped = [];
                    });
                }
                else {
                    _this.returnBackFlipped().then(function() {
                        resolve();
                        _this.flipped = [];
                    });
                }
            }
            else {
                resolve();
            }
        });
    }

    init(node) {
        this.wrap = node;

        this.parent.model
            .getTiles()
            .forEach((model) => {
                const ctr = new TileCtr(model);
                const tpl = $$('<div class="tile"><div class="tile-inner"><div class="front"></div><div class="back"></div></div></div>');

                tpl
                    .data('controller', ctr)
                    .appendTo(node)

                ctr.init(tpl);
            });

        node.on('click', '.tile-inner', (e) => {
            this.clickTileHandler(e);
        });
    }

}

export default StageCtr;
