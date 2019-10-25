/** 
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
*/
function monthDays(time){
    time = new Date(time);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    return new Date(year, month, 0).getDate();
}
module.exports = monthDays;