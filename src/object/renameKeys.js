/**
 * @desc 更改对象的键名
 * @param  {Object} keysMap 源与终的键名枚举
 * @param  {Object} originMap 需要rename的对象
 * @return {Object} 
 */
function renameKeys (keysMap, originMap) {
  return Object.keys(originMap).reduce(
    (acc, key) =>
      Object.assign(acc, { [keysMap[key] || key]: originMap[key] }),
    {},
  );
}
module.exports = renameKeys;
