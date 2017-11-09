var getScrollTop = require('./getScrollTop');
var setScrollTop = require('./setScrollTop');
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到指定位置
 * @param {Number} to 
 * @param {Number} duration 
 */
function scrollTo(to, duration) {
    var to = 0;
    var duration = 16;

    if (duration < 0) return
    var diff = to - getScrollTop();
    if (diff === 0) return
    var perTick = diff / duration * 10;
    requestAnimationFrame(
        function () {
            if (Math.abs(perTick) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + perTick);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 16);
        });

}

module.exports = scrollTo;