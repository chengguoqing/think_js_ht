const Base = require('../base_nb.js');
var request = require('request');
var appid = "wx30f2eb708506f491",
    secret = "189e0d0d1ccb64c1d81650f5782b1048"

//微信登录获取openid
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        date_s = JSON.parse(this.decryption(date_s.token))
        var sd_Dff = await this.get_oppenid(date_s.code)

        var sd_ddf = {}
        sd_ddf.code = 0
        sd_ddf.msg = "success"
        sd_ddf.data = this.encryption(JSON.stringify(sd_Dff))


        return this.fail(sd_ddf); //2输出json 推荐

    }

    get_oppenid(code) {
        return new Promise((resolve, reject) => {
            request({
                url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
                method: 'get'
            }, function (err, response, body) {
                resolve(body)
            });
        })

    }

};
