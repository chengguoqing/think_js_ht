const Base = require('../base_nb.js');
var request = require('request');

//获取经纬度
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        this.ctx.redirect('https://xiaodou.f.yunzhonghe.com/pay/view?topOrderNo='+this.ctx.query.topOrderNo);
    }

};
