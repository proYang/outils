/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
function isEmail(str: string): boolean {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

export default isEmail;