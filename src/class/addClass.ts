/**
 * 
 * @desc   为元素添加class
 * @param  {HTMLElement} ele 
 * @param  {String} cls 
 */

import hasClass from './hasClass';

function addClass(ele: HTMLElement, cls: string): void {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

export default addClass;