var s = {
    mail: function (vs_s) {
        var sd_sf = false
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/ //验证邮箱
        if (re.test(vs_s)) {
            sd_sf = true
        }
        return sd_sf;
    },
    phone: function (vs_s) {
        var sd_sf = false
        if (vs_s.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && vs_s.length == 11) {
            sd_sf = true
        }
        return sd_sf;
    },
    car_t: function (vs_s) {
        var sd_sf = false
        var re = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        if (re.test(vs_s)) {
            sd_sf = true
        }
        return sd_sf;
    }
}
$(function () {
    var time1 = new Date().format("MM月dd日 hh:mm:ss");
    $(".text_oie.ab").text(time1)
    setInterval(function () {
        var time1 = new Date().format("MM月dd日 hh:mm:ss");
        $(".text_oie.ab").text(time1)
    }, 1000);

    $(".sd_jh_eert").on("click", function () {
        $(this).parent().find(".sd_jh_e_errt").toggleClass("show")
    })

})







Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


function chg_a(x, a, b, c) {
    var sdx = x
    $(sdx[0].children).map(function (x) {
        $(b).append('<option value="' + x + '">' + this.text + '</option>')
    })
    $(sdx[0].children[0].children).map(function (x) {
        $(c).append('<option value=' + x + '">' + this.text + '</option>')
    })
    $(sdx).map(function (x) {
        $(a).append('<option value="' + x + '">' + this.text + '</option>')
    })
    var sd_iux = ""; //市
    sd_iux = sdx[0].children;
    $(a).on("change", function () {
        var mh = $(this).val();
        $(b).empty().addClass("show")
        $(c).empty()
        $(b).append('<option >请选择</option>')
        $(c).append('<option >请选择</option>')
        sd_iux = sdx[mh].children;
        $(sdx[mh].children).map(function (x) {
            $(b).append('<option value="' + x + '">' + this.text + '</option>')
        })
    })
    var q_y = ""
    $(b).on("change", function () {
        var mh = $(this).val();
        $(c).empty().addClass("show");
        $(c).append('<option >请选择</option>')
        $(sd_iux[mh].children).map(function (x) {
            $(c).append('<option value="' + x + '">' + this.text + '</option>')
        })
    })
}
