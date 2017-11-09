/**
 * 
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele 
 * @returns { {left: number, top: number} }
 */
function offset(ele) {
    var pos = {
        left: 0,
        top: 0
    };
    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
    };
    return pos;
}

module.exports = offset;