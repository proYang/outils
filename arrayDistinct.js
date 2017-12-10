/**
 * @desc 数组去重
 * @param {Array} targetArray 需要去重的数组
 * @return distinct array
 */
function arrayDistinct(targetArray) {
    if(!Array.isArray(targetArray)){
        return targetArray
    }
    if(targetArray.some((item)=> Object.is(typeof item,"object"))){
        return targetArray
        .map((item) => JSON.stringify(item))
        .filter((item, idx, arry) => idx === arry.findIndex( (current)=> current === item))
        .map((item) => JSON.parse(item))
    }
    return [...new Set(targetArray)]
}

module.exports = arrayDistinct
