module.exports = class extends think.Controller {
    __before() {
        this.assign('base_url', 'https://duxinggj.com/www/static/');
    }
    wcf() {
        var ssr_dr = {}
        ssr_dr.appId = "wx30f2eb708506f491"
        ssr_dr.secret = '189e0d0d1ccb64c1d81650f5782b1048'
        return ssr_dr
    }
       //    随便机数
    randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
};
