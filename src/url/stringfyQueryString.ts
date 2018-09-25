/**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
function stringfyQueryString(obj: object): string {
    if (!obj) return '';
    let pairs:Array<string> = [];

    for (let key in obj) {
        let value:any = obj[key];

        if (value instanceof Array) {
            for (var i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }

        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
}

export default stringfyQueryString