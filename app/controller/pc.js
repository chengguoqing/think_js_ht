module.exports = class extends think.Controller {
    __before() {
        this.assign('base_url', 'https://duxinggj.com/www/static/');
    }
    wcf() {
        var ssr_dr = {};
        ssr_dr.appId = "wx30f2eb708506f491";
        ssr_dr.secret = '189e0d0d1ccb64c1d81650f5782b1048';
        return ssr_dr;
    }
};
//# sourceMappingURL=pc.js.map