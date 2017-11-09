/**
 * @desc 获取窗口可视区域高度
 */
function getClientWidth() {
    var clientWidth = 0;
    if (document.body.clientWidth && document.documentElement.clientWidth) {
        clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
    } else {
        clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
    }
    return clientWidth;
}

module.exports = getClientWidth;