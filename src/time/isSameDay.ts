/**
 * @desc   判断是否为同一天
 * @param  {Date} date1 
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
function isSameDay(date1: Date, date2: Date): boolean {
    if (!date2) {
        date2 = new Date();
    }
    let date1_year: number = date1.getFullYear(),
        date1_month: number = date1.getMonth() + 1,
        date1_date: number = date1.getDate();
    var date2_year: number = date2.getFullYear(),
        date2_month: number = date2.getMonth() + 1,
        date2_date: number = date2.getDate()

    return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;

}

export default isSameDay