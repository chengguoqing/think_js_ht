//公共方法
var xml2js = require('xml2js');
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


//随机数
exports.randomString = function (len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


exports.buildXML = function (json) {
    var builder = new xml2js.Builder();
    return builder.buildObject(json);
};

exports.parseXML = function (xml, fn) {
    var parser = new xml2js.Parser({
        trim: true,
        explicitArray: false,
        explicitRoot: false
    });
    parser.parseString(xml, fn || function (err, result) {});
};
exports.zx = function (data) {
    var stringA = Object.keys(data),
        s_sdfs = ""
    stringA.map(function (a) {
        s_sdfs += "&" + a + "=" + data[a]
    })
    s_sdfs = s_sdfs.substring(1, s_sdfs.length)
    return s_sdfs
}
