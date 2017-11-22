/**
 * H5软键盘弹起
 *
 * 当软件键盘弹起会改变当前 window.innerHeight,判断这个的值得变化
 *
 * @param callbackOne 当软键盘弹起并缩回时的回调
 * @param callbackTwo 当软键盘弹起的回调
 */

function windowResize(callbackOne, callbackTwo) {
  const clientHeight = window.innerHeight;

  window.addEventListener('resize', () => {
	let height = window.innerHeight;
	if (height === clientHeight) {
	  callbackOne();
	}
	if (height < clientHeight) {
	  callbackTwo();
	}
  });
}

modules.exports = windowResize;
