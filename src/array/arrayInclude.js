/**
 *
 * @desc 判断数组1是否包含数组2
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
function arrayInclude(arr1, arr2) {
	if (arr1 === arr2) return true
	if (arr1.length < arr2.length) {
		return false
	}
	return !arr2.some(item => {
		return !arr1.includes(item)
	})
}

console.log(arrayInclude([0, 2, 3, 4], [1, 2, 3]))

module.exports = arrayInclude
