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

    jump() {
        return velocity(
            this.back,
            {
                scale: 1.1,
                boxShadowBlur: 20
            },
            {
                duration: 1000,
                easing: 'spring'
            }
        );
    }

    goTo(target) {
        const offset = this.wrap.offset();

        return velocity(
            this.back,
            {
                top: -offset.top,
                left: -offset.left,
                opacity: 0,
                height: 0,
                boxShadowBlur: 0
            },
            {
                duration: config.flipDuration,
                easing: 'swing'
            }
        );
    }

    throwAway(target) {
        return this.jump()
            .then(() => {
                return this.goTo({
                    top: 0,
                    left: 0
                });
            });
    }

    // other

    updateState() {
        if (this.model) {
            this.back.css({
                backgroundImage: `url(${this.model.imgPath()})`
            })
        }
    }

    // basic

    init(node) {
        this.wrap = node;
        this.inner = node.find('.tile-inner');
        this.front = node.find('.front');
        this.back = node.find('.back');

        this.updateState();
    }

    constructor(model) {
        this.model = model;
    }

}

export default TileCtr;
