/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date|Number} startTime 
 * @return {String}
 */
function formatPassTime(startTime: Date|number): string {
    const currentTime: number = Date.parse(new Date().toString());
    const time: number = currentTime - Date.parse(startTime.toString());
    const day: number = parseInt(String(time / (1000 * 60 * 60 * 24)));
    const hour: number = parseInt(String(time / (1000 * 60 * 60)));
    const min: number = parseInt(String(time / (1000 * 60)));
    const month: number = parseInt(String(day / 30));
    const year: number = parseInt(String(month / 12));
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}

export default formatPassTime