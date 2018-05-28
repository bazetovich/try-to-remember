import { Stage, Shape, Touch } from '../../../node_modules/@createjs/easeljs/dist/easeljs.common';
import Point from '../point/point';
import config from './config';
import calc from '../utils/calculations';

const ZERO = 0;

class Map {

    constructor(node) {
        this.gameWrap = node;
        this.gameWidth = node.width();
        this.gameHeight = node.height();
        this.stage = new Stage('stage');

        this.matrix = null;
        this.tileWidth = null;
        this.vTileCount = null;
        this.hTileCount = null;

        this.updateTileOptionsByGameWrap();
        this.updateCanvasAndStage();
        this.createAndDrawMatrix();
    }

    updateTileOptionsByGameWrap() {
        this.hTileCount = config.tileCount.horizontal

        if (this.gameWidth > this.gameHeight) {
            this.hTileCount = config.tileCount.vertical;
        }

        this.tileWidth = calc.getTileWidth(this.gameWidth, this.hTileCount);
        this.vTileCount = calc.getVTileCount(this.gameHeight, this.tileWidth);
    }

    // drawing

    updateCanvasAndStage() {
        Touch.enable(this.stage);
        this.stage.enableMouseOver();

        this.gameWrap
            .find('#stage')
            .attr({
                width: calc.toFixed(this.gameWidth),
                height: calc.toFixed(this.gameHeight)
            });
    }

    createAndDrawMatrix() {
        let matrix = [];

        for (let i = ZERO; i < this.vTileCount; i++) {
            let row = [];

            this.drawHLine(i);

            for (let j = ZERO; j < this.hTileCount; j++) {
                if (i === ZERO) {
                    this.drawVLine(j);
                }

                row.push(new Point({
                    id: {
                        x: j,
                        y: i
                    },
                    width: this.tileWidth
                }, this));
            }

            matrix.push(row);
        }

        this.matrix = matrix;

        this.stage.update();
    }

    drawHLine(ratio) {
        let line = new Shape();
        const startX = ZERO;
        const startY = calc.getLineStepCord(ratio, this.tileWidth);
        const endX = this.gameWidth;

        line.graphics
            .setStrokeStyle(config.lineWidth)
            .beginStroke(config.colors.lines)
            .moveTo(startX, startY)
            .lineTo(endX, startY)
            .endStroke();

        this.stage.addChild(line);
    }

    drawVLine(ratio) {
        let line = new Shape();
        const startX = calc.getLineStepCord(ratio, this.tileWidth);
        const startY = ZERO;
        const endX = startX;
        const endY = this.gameHeight;

        line.graphics
            .setStrokeStyle(config.lineWidth)
            .beginStroke(config.colors.lines)
            .moveTo(startX, startY)
            .lineTo(endX, endY)
            .endStroke();

        this.stage.addChild(line);
    }

}

export default Map;
