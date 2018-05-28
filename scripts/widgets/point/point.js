import { Shape } from '../../../node_modules/@createjs/easeljs/dist/easeljs.common';
import config from './config';
import calc from '../utils/calculations';

class Point {

    constructor(options, map) {
        this.map = map;

        this.occupied = false;
        this.circled = false;

        this.setWidth(options.width);
        this.setId(options.id);

        this.circle = this.draw();

        this.circle.on('click', this.circleClickHandler, this, true);
    }

    // handlers

    circleClickHandler() {
        const pointWidth = this.getWidth();
        const id = this.getId();

        this.occupied = true;
        this.circle.cursor = 'default';
        this.circle
            .graphics
            .clear()
            .beginFill(config.colors.circleRed)
            .drawCircle(
                calc.getPointCord(id.x, pointWidth),
                calc.getPointCord(id.y, pointWidth),
                config.circleRadius
            );

        this.map.stage.update();
    }

    // drawing

    draw() {
        const circle = new Shape();
        const pointWidth = this.getWidth();
        const id = this.getId();

        circle.cursor = 'pointer';
        circle.graphics
            .beginFill(config.colors.circleDefault)
            .drawCircle(
                calc.getPointCord(id.x, pointWidth),
                calc.getPointCord(id.y, pointWidth),
                config.circleRadius
            );
        this.map.stage.addChild(circle);

        return circle;
    }

    // accessors

    setWidth(w) {
        this.w = w;
    }

    getWidth() {
        return this.w;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

}

export default Point;
