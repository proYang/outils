/**
 * 
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean} 
 */
function isSupportWebP() {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

module.exports = isSupportWebP;