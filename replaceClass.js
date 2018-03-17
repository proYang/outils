/**
 * 替换类名(“被替换的类名”,”替换的类名”)
 * @type {removeClass}
 */

var removeClass = require('./removeClass');
var addClass = require('./addClass');

function replaceClass(ele, newName, oldName) {
  removeClass(ele, oldName);
  addClass(ele, newName);
}

module.exports = removeClass;