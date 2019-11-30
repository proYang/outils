/**
 * 
 * @desc 判断arr1是否包含在arr2中
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */

function arrayInclude(arr1, arr2) {
  if(arr1.length > arr2.length) return false;
  for(let item of arr1) {
    if(!arr2.includes(item)) return false;
  }
  return true;
}

module.exports = arrayInclude;