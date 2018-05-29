import $$ from 'dom7';
import TileCtr from '../tile/tile';

class StageCtr {

    constructor(parent) {
        this.parent = parent;
    }

    clickTileHandler() {
        // flip tile
        // count flipped
        // after 2 either reset flipped tiles or remove them from stage if they are equal || trigger event to game with
        // update player score
    }

    init(node) {
        this.wrap = node;

        this.parent.model
            .getTiles()
            .forEach(function(model) {
                const ctr = new TileCtr(model);
                const tpl = $$('<div class="tile"><div class="tile-inner"><div class="front"></div><div class="back"></div></div></div>');

                tpl
                    .data('controller', ctr) // ??
                    .appendTo(node)

                ctr.init(tpl);
            });

        node.on('click', '.tile', () => this.clickTileHandler);
    }

}

export default StageCtr;
