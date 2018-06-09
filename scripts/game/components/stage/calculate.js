
// helpers

function toFixed(num, precision = 3) {
    return (num).toFixed(precision);
}

function floor(num) {
    return Math.floor(num);
}

function percentFrom(percent, number) {
    return floor(( number / 100 ) * 5);
}

// tile

function isUnFitByHeight(height, countPerHeight, tileWidth) {
    return height < tileWidth * countPerHeight;
}

function tileWidth(width, height, count) {
    // const GAP_RATIO = 5;
    // const gap = percentFrom(GAP_RATIO, width);

    let countPerWidth = 1;
    let countPerHeight = count;
    let tileWidth = width;

    while (isUnFitByHeight(height, countPerHeight, tileWidth)) {
        countPerWidth++;
        countPerHeight = count / countPerWidth;

        /*while (!Number.isInteger(countPerHeight)) {
            countPerWidth++;
            countPerHeight = count / countPerWidth;
        }*/

        tileWidth = floor(width / countPerWidth);
    }

    return tileWidth;
}

export default {
    tileWidth: tileWidth
};
