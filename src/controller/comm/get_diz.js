const Base = require('../base_nb.js');
var request = require('request');
//根据经纬度获取地址 
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        date_s = JSON.parse(this.decryption(date_s.token))
        var assr_d = await this.get_url(date_s.location)

        var sd_ddf = {}
        sd_ddf.code = 0
        sd_ddf.msg = "success"
        sd_ddf.data = this.encryption(JSON.stringify(assr_d))


        return this.fail(sd_ddf); //2输出json 推荐

    }
    get_url(location) {
        return new Promise((resolve, reject) => {
            request('http://restapi.amap.com/v3/geocode/regeo?key=1ca50beb27f893268297a00cdb0acdf3&location=' + location + '&poitype=&radius=1000&extensions=all&batch=false&roadlevel=0', function (error, resp, json) {
                resolve(JSON.parse(json));
            })
        })
    }

};
