/**
 * 
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */

function isLeapYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  return false;
}

module.exports = isLeapYear;