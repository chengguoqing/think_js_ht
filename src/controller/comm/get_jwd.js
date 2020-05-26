const Base = require('../base_nb.js');
var request = require('request');
//获取经纬度
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        //date_s = JSON.parse(this.decryption(date_s.token))

        var assr_d = await this.get_url(encodeURIComponent(date_s.address))
  
        var sd_ddf = {}
        sd_ddf.code = 0
        sd_ddf.msg = "success"
        sd_ddf.data = assr_d
        return this.fail(sd_ddf); //2输出json 推荐
    }
    get_url(address) {
        return new Promise((resolve, reject) => {
            request('https://restapi.amap.com/v3/geocode/geo?key=1ca50beb27f893268297a00cdb0acdf3&address=' + address, function (error, resp, json) {
                console.log(address);
                resolve(JSON.parse(json));
            })
        })
    }

};
