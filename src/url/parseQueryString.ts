/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function parseQueryString(url: string): object {
    url = !url ? window.location.href : url;
    if(url.indexOf('?') === -1) {
        return {};
    }
    let search:string = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
    if (search === '') {
        return {};
    }
    let searchArr: Array<string> = search.split('&');
    let query: object = {};
    for (let i:number = 0; i < searchArr.length; i++) {
        let pair = searchArr[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

export default parseQueryString
