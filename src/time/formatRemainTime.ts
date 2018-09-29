/**
 * 
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date|Number} endTime  
 * @return {String}
 */
function formatRemainTime(endTime: Date|number): string {
    const startDate: Date = new Date(); //开始时间
    const endDate: Date = new Date(endTime.toString()); //结束时间
    const t: number = endDate.getTime() - startDate.getTime(); //时间差
    let d: number = 0,
        h: number = 0,
        m: number = 0,
        s: number = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

export default formatRemainTime