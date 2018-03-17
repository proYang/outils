/**
 *
 * @param year
 * @returns {boolean}
 */

function isRenYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  return false;
}

module.exports = isRenYear;