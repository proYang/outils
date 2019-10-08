/** 
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
*/
function monthDays(time){
    time = new Date(time);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    return new Date(year, month, 0).getDate();
}
module.exports = monthDays;