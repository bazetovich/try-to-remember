import velocity from 'velocity-animate';

class TileCtr {

    constructor(model) {
        this.model = model;
    }

    // handlers

    tileClickHandler() {
        this.flip();
    }

    // methods

    flip() {
        velocity(this.inner, {
            rotateY: "180deg"
        }, {duration: 500});
    }

    init(node) {
        this.inner = node
            .find('.tile-inner')
            .on('click', () => {
                this.tileClickHandler()
            });
    }

}

export default TileCtr;
