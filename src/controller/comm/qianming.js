const Base = require('../base_nb.js');
var request = require('request');
var md5 = require('md5');
var sha1 = require('sha1')
var xml2js = require('xml2js');
//微信支付的签名 
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        date_s = JSON.parse(this.decryption(date_s.token))
        var sd_drr = await this.get_qianm(date_s.openid, date_s.jiner)

        var sd_ddf = {}
        sd_ddf.code = 0
        sd_ddf.msg = "success"
        sd_ddf.data = this.encryption(JSON.stringify(sd_drr))

        return this.fail(sd_ddf); //2输出json 推荐

    }

    get_qianm(openid, jiner) {
        var sd_sdf = {},
            timeStamp = String(new Date().getTime()),
            th = this
        sd_sdf.appid = "wx30f2eb708506f491"
        sd_sdf.mch_id = "1491259172"
        sd_sdf.body = "独行工匠"
        sd_sdf.timeStamp = timeStamp
        sd_sdf.nonce_str = this.randomString()
        sd_sdf.out_trade_no = new Date().getTime()
        sd_sdf.total_fee = jiner * 100
        sd_sdf.spbill_create_ip = "218.17.251.186"
        sd_sdf.trade_type = "JSAPI"
        sd_sdf.notify_url = "http://duxinggj.com/"
        sd_sdf.openid = openid
        var stringA = Object.keys(sd_sdf),
            s_sdfs = ""
        stringA.sort()
        stringA.map(function (a) {
            s_sdfs += "&" + a + "=" + sd_sdf[a]
        })
        s_sdfs = s_sdfs.substring(1, s_sdfs.length)
        var stringSignTemp = s_sdfs + "&key=5E1B3F82F1D5CAA0C62DD42E6DAAACD4" //key为商户平台设置的密钥key
        var s = md5(stringSignTemp).toUpperCase()
        sd_sdf.sign = s

        return new Promise((resolve, reject) => {
            request({
                url: "https://api.mch.weixin.qq.com/pay/unifiedorder",
                method: 'POST',
                body: th.buildXML(sd_sdf)
            }, function (err, response, body) {
                xml2js.parseString(body, {
                    explicitArray: false
                }, function (err, json) {
                    console.log(json);
                    let sd_das = json.xml,
                        sd_drtsae = {}
                    sd_drtsae.appId = sd_das.appid;
                    sd_drtsae.nonceStr = sd_das.nonce_str;
                    sd_drtsae.package = "prepay_id=" + sd_das.prepay_id
                    sd_drtsae.signType = "MD5"
                    sd_drtsae.timeStamp = timeStamp;
                    sd_drtsae.key = "5E1B3F82F1D5CAA0C62DD42E6DAAACD4"
                    sd_drtsae.paySign = md5(th.zx(sd_drtsae))
                    resolve(JSON.stringify(sd_drtsae))
                });
            });


        })
    }

};
