/**
 * @desc 图片预加载
 * @param {String} 预加载src
 * @return {Promise}
 */
function imgLazy(src) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = src;
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      console.error("图片加载失败", src);
      reject(false);
    };
  });
}
module.exports = imgLazy;