/**
 * 
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */

 interface PositionVal {
   left: number,
   top: number
 }

function offset(ele: HTMLElement): object {
    let pos: PositionVal = {
        left: 0,
        top: 0
    };
    let newEle: object = ele;
    while (newEle) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        newEle = ele.offsetParent;
    };
    return pos;
}

export default offset;