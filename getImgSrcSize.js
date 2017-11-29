/**
 * 传入图片url地址,可以获取图片宽高
 * @param src
 * @returns {boolean}
 */

function getImgSrcSize(src) {
  if (!src) {
	console.error('src is undefined');
	return false;
  }

  var img = new Image();
  img.src = src;

  img.onload = function () {
	return { width: img.width, height: img.height };
  }
}

module.exports = getImgSrcSize;