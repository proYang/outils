/**
 * 生成随机ID
 * @param {Number} randomLength 长度
 * @return {String} 
 */
function randomID(randomLength = 8) {
  return Number(
    Math.random()
      .toString()
      .substr(3, randomLength) + Date.now()
  ).toString(36);
}
module.exports = randomID;