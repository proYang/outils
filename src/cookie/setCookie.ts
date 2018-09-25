/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
function setCookie(name: string, value: string, days: number): void {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

export default setCookie