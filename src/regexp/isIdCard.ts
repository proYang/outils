/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
function isIdCard(str: string|number): boolean {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str.toString())
}

export default isIdCard