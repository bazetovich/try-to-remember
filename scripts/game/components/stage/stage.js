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
            let tile = $$(e.currentTarget);
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
        let first =  this.flipped[0];
        let second =  this.flipped[1];

        return Boolean(
            first &&
            first.model &&
            second &&
            second.model &&
            first.model.id() === second.model.id()
        );
    }

    disableFlipped() {
        this.flipped.forEach(function(ctr) {
            if (ctr) {
                ctr.disable();
            }
        })
    }

    giveFlippedToCurrentUser() {

    }

    checkFlipped(ctr) {
        let _this = this;

        return new Promise(function(resolve) {
            _this.flipped.push(ctr);

            if (_this.flipped.length === 2) {

                if (_this.isFlippedEqual()) {
                    _this.disableFlipped();
                    _this.giveFlippedToCurrentUser()
                }
                else {

                }

                // _this.flipped = [];
            }
            else {
                resolve();
            }
        })
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

        node.on('click', '.tile.tile-inner', () => this.clickTileHandler());
    }

}

export default StageCtr;
