/**
 * 
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
function isPhoneNum(str) {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}

module.exports = isPhoneNum