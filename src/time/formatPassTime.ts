/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date|Number} startTime 
 * @return {String}
 */
function formatPassTime(startTime: Date|number): string {
    var currentTime = Date.parse(new Date().toString()),
        time = currentTime - Date.parse(startTime.toString()),
        day = parseInt(String(time / (1000 * 60 * 60 * 24))),
        hour = parseInt(String(time / (1000 * 60 * 60))),
        min = parseInt(String(time / (1000 * 60))),
        month = parseInt(String(day / 30)),
        year = parseInt(String(month / 12));
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}

export default formatPassTime