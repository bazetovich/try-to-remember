import velocity from 'velocity-animate';
import config from './config';

'use strict';

class TileCtr {

    // animation

    flip() {
        return velocity(
            this.inner,
            {
                rotateY: "180deg"
            },
            {
                duration: config.flipDuration
            }
        );
    }

    flipBack() {
        return velocity(
            this.inner,
            {
                rotateY: "0deg"
            },
            {
                duration: config.flipDuration
            }
        );
    }

    disable() {

    }

    // basic

    init(node) {
        console.log(node.offset())

        this.inner = node.find('.tile-inner');
    }

    constructor(model) {
        this.model = model;
    }

}

export default TileCtr;
