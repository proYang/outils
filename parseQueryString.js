/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function parseQueryString(url) {
    url = (!url ? window.location.href : url);
    if(url.indexOf('?') === -1) {
        return {};
    }
    var search = url.substring(url.lastIndexOf('?') + 1);
    if (!search) {
        return {};
    }
    var data = {};
    try{
        data = JSON.parse(
            '{"' +
                decodeURIComponent(search)
                    .replace(/"/g, '\\"')
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"') +
                '"}'
        );
    } catch (e) {
        console.error('数据格式错误');
    }
    return data;
}

module.exports = parseQueryString
