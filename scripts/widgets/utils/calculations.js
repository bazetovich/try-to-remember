
// helpers

function toFixed(num, precision) {
    precision = precision || 3;

    return (num).toFixed(precision);
}

function floor(num) {
    return Math.floor(num);
}

// tile

function getTileWidth(gameWidth, hCount) {
    return toFixed(gameWidth / hCount)
}

function getVTileCount(gameHeight, tileWidth) {
    return floor(gameHeight / tileWidth)
}

// line

function getLineStepCord(ratio, tileWidth) {
    return (tileWidth * ratio) + (tileWidth / 2);
}

// point

function getPointCord(cord, pointWidth) {
    return (pointWidth * cord) + (pointWidth / 2);
}

export default {
    toFixed: toFixed,
    getTileWidth: getTileWidth,
    getLineStepCord: getLineStepCord,
    getPointCord: getPointCord,
    getVTileCount: getVTileCount
};
