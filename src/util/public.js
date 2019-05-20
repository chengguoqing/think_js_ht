//公共方法

//时间戳 转日期
exports.time_c = function (t) {
    let time = new Date()
    time.setTime(t)
    let Year = time.getFullYear(),
        Month = time.getMonth() + 1,
        Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate(),
        hour = time.getHours() < 10 ? 0 + '' + time.getHours() : time.getHours(),
        Minutes = time.getMinutes() < 10 ? 0 + '' + time.getMinutes() : time.getMinutes(),
        Seconds = time.getSeconds() < 10 ? 0 + '' + time.getSeconds() : time.getSeconds()
    Month < 10 ? Month = 0 + '' + Month : ''
    return Year + "-" + Month + "-" + Data + " " + hour + ":" + Minutes + ":" + Seconds
}
