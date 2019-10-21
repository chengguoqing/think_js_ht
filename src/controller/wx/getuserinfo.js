//获取用户信息
const Base = require('../base_nb.js')
var appid = 'wxf8b0c920900b2663',
    secret = '299c6ab8cf95731ea90f9d28e6b150ce'
var request = require('request');
const comm = require('../../util/public.js');
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.query
        let asdd_a = await this.getaccess_token(date_s.code)
        let asdd_b = await this.getuserinfo(asdd_a.access_token, asdd_a.openid)
        let sd_der = ''
        asdd_b.addtime = new Date().getTime()
        if (date_s.type == 1) {
            sd_der = await this.add_action('wxuser', asdd_b, {
                openid: asdd_b.openid
            })
        }
        delete asdd_b.openid
        return this.json(asdd_b)
    }
    getaccess_token(code) { //获取token
        var qiurl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`
        return new Promise((resolve, reject) => {
            request(qiurl, function (error, resp, json) {
                resolve(JSON.parse(json))
            })
        })
    }
    getuserinfo(token, openid) { //获取token
        var qiurl = `https://api.weixin.qq.com/sns/userinfo?access_token=${token}&openid=${openid}&lang=zh_CN`
        return new Promise((resolve, reject) => {
            request(qiurl, function (error, resp, json) {
                resolve(JSON.parse(json))
            })
        })
    }
}
