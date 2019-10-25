const Base = require('./base_nb.js')
var appid = 'wxf8b0c920900b2663',
    secret = '299c6ab8cf95731ea90f9d28e6b150ce',
    ticketUrl = "https://api.weixin.qq.com/cgi-bin/token",
    jsapi_ticket = "http://api.weixin.qq.com/cgi-bin/ticket/getticket",
    cache_duration = 1000 * 60 * 60 * 2; //缓存时长为2小时
var request = require('request');
var md5 = require('md5');
const comm = require('../util/public.js');
var sha1 = require('sha1');
var cache = require('memory-cache');
var shkey = "EBMscpCKkn2znrfsMMCrweBGTCGDDrpR"
var xml2js = require('xml2js');
module.exports = class extends Base {
    //初始化
    async initAction() {
        var date_s = this.ctx.query
        var xsd_sd = date_s.sd_us,
            sd_drtsae = ''
        if (cache.get('ticket')) {
            sd_drtsae = this.kh_sd(cache.get('ticket'), xsd_sd)
            sd_drtsae.hc = true
        } else {
            let ssd_er = await this.getaccess_token()
            let ssde = await this.getconfig(ssd_er)
            cache.put('ticket', ssde, cache_duration); //加入缓存
            sd_drtsae = this.kh_sd(ssde, xsd_sd)
            sd_drtsae.hc = false
        }
        return this.json(sd_drtsae)
    }
    //    获取用户信息
    async getuserinfoAction() {
        var date_s = this.ctx.query
        let asdd_a = await this.getaccess_tokens(date_s.code)
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
    //    微信支付
    async zhifuAction() {
        var date_s = this.ctx.query
        let data = await this.model('wxuser').where({
            id: 2
        }).find();
        let openid = data.openid
        var sd_sdf = {}
        sd_sdf.appid = appid
        sd_sdf.mch_id = "1497380712"
        sd_sdf.nonce_str = comm.randomString()
        sd_sdf.body = "独行工匠工作室"
        sd_sdf.out_trade_no = new Date().getTime()
        sd_sdf.total_fee = date_s.jiner * 100
        sd_sdf.spbill_create_ip = "119.29.187.203"
        sd_sdf.notify_url = "http://www.duxinggj.com/"
        sd_sdf.trade_type = "JSAPI"
        sd_sdf.openid = openid
        var stringA = Object.keys(sd_sdf),
            s_sdfs = ""
        stringA.sort()
        stringA.map(function (a) {
            s_sdfs += "&" + a + "=" + sd_sdf[a]
        })
        s_sdfs = s_sdfs.substring(1, s_sdfs.length)
        var stringSignTemp = s_sdfs + "&key=" + shkey //key为商户平台设置的密钥key
        var s = md5(stringSignTemp).toUpperCase()
        sd_sdf.sign = s
        let ssdeer = await this.unifiedorder(sd_sdf)
        let dasw = await this.parseString(ssdeer)
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = dasw
        return this.fail(dateer)
    }
    unifiedorder(sd_sdf) { //获取unifiedorder
        return new Promise((resolve, reject) => {
            request({
                url: "https://api.mch.weixin.qq.com/pay/unifiedorder",
                method: 'POST',
                body: comm.buildXML(sd_sdf)
            }, function (err, response, body) {
                resolve(body)
            })
        })
    }
    parseString(body) { //获取unifiedorder
        return new Promise((resolve, reject) => {
            xml2js.parseString(body, {
                explicitArray: false
            }, function (err, json) {
                let sd_das = json.xml,
                    sd_drtsae = {}
                sd_drtsae.appId = appid;
                sd_drtsae.nonceStr = comm.randomString();
                sd_drtsae.package = "prepay_id=" + sd_das.prepay_id
                sd_drtsae.signType = "MD5"
                sd_drtsae.timeStamp = String(new Date().getTime());
                sd_drtsae.key = shkey
                sd_drtsae.paySign = md5(comm.zx(sd_drtsae))
                resolve(sd_drtsae)
            })
        })
    }

    getaccess_token() { //获取token
        var qiurl = ticketUrl + `?grant_type=client_credential&appid=${appid}&secret=${secret}`
        return new Promise((resolve, reject) => {
            console.log(qiurl);
            request(qiurl, function (error, resp, json) {
                var ticketMap = JSON.parse(json);
                var jsapi = jsapi_ticket + "?type=jsapi&access_token=" + ticketMap.access_token
                console.log(json)
                resolve(jsapi)
            })
        })
    }
    getconfig(jsapi) {
        return new Promise((resolve, reject) => {
            request(jsapi, function (error, resp, jsoner) {
                var token_oe = JSON.parse(jsoner)
                resolve(token_oe.ticket)
            })
        })
    }
    kh_sd(ticket, url) {
        var sd_jh = {}
        sd_jh.appId = appid
        sd_jh.nonceStr = comm.randomString()
        sd_jh.timestamp = Math.floor(Date.now() / 1000) //精确到秒
        sd_jh.jsapi_ticket = ticket
        sd_jh.signature = sha1('jsapi_ticket=' + ticket + '&noncestr=' + sd_jh.nonceStr + '&timestamp=' + sd_jh.timestamp + '&url=' + url);
        return sd_jh;
    }
    getaccess_tokens(code) { //获取token
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
