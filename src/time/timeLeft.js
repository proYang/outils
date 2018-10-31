/**
 * 开始时间-结束时间的剩余时间
 * @param startTime
 * @param endTime
 * @returns {Object} 天 时 分 秒
 */
export function timeLeft(startTime, endTime) {
    if (!startTime || !endTime) {
        return
    }
    /**
     * 苹果浏览器兼容性问题
     * replace(/-/g, '/')
     * @type {Date}
     */
    var startDate = new Date(startTime.replace(/-/g, '/')) //开始时间
    var endDate = new Date(endTime.replace(/-/g, '/')) //结束时间
    var t = endDate.getTime() - startDate.getTime()
    var d = 0,
        h = 0,
        m = 0,
        s = 0
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24)
        h = Math.floor(t / 1000 / 60 / 60 % 24)
        m = Math.floor(t / 1000 / 60 % 60)
        s = Math.floor(t / 1000 % 60)
    }
    return { d, h, m, s }
}

modules.exports = timeLeft;
