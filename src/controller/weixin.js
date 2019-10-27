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
    //微信服务器配置
    async jiesouAction() {
        var date_s = this.ctx.query
        let token = 'o665p2sdo',
            timestamp = date_s.timestamp,
            echostr = date_s.echostr,
            nonce = date_s.nonce
        let sseef = [token, timestamp, nonce],
            s_sdfs = ''
        sseef.sort()
        sseef.map(function (a) {
            s_sdfs += a
        })
        let sderr = sha1(s_sdfs)
        if (date_s.signature == sderr && echostr) {
            return this.body = echostr;
        } else {
            let ssdeef = this.ctx.post()
            console.log(this.ctx.post());
            ssdeef = ssdeef.xml
            let ssdedsse = ssdeef.EventKey[0],
                xmsd = ''
            ssdedsse = JSON.parse(ssdedsse)
            if (ssdedsse.type == 1) {
                let dataer = await this.model('spxq').where({
                    id: ssdedsse.id
                }).find();
                dataer.spt = dataer.spt.split(",")
                dataer.spt = dataer.spt[0]
                let usewe = `http://www.duxinggj.com/www/phone/qm/#/pages/commodity/details?id=${ssdedsse.id}`
                xmsd = `<xml>
  <ToUserName><![CDATA[${ssdeef.FromUserName[0]}]]></ToUserName>
  <FromUserName><![CDATA[${ssdeef.ToUserName[0]}]]></FromUserName>
  <CreateTime>${new Date().getTime()/1000}</CreateTime>
  <MsgType><![CDATA[news]]></MsgType>
  <ArticleCount>1</ArticleCount>
  <Articles>
    <item>
      <Title><![CDATA[${dataer.name}]]></Title>
      <Description><![CDATA[${dataer.fxms}]]></Description>
      <PicUrl><![CDATA[${dataer.spt}]]></PicUrl>
     <Url><![CDATA[${usewe}]]></Url>
    </item>
  </Articles>
</xml>`
            }
            return this.body = xmsd
        }

    }
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
    //    生成推广活动详情二维码
    async geterweimaAction() {
        var date_s = this.ctx.query
        if (!cache.get('access_token')) {
            await this.getaccess_token()
        }
        let scene_str = {}
        scene_str.type = 1 // 1为活动详情
        scene_str.id = date_s.id
        scene_str = JSON.stringify(scene_str)
        let sde = await this.geterweima(scene_str)
        let dasewer = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=` + encodeURIComponent(sde.ticket)
        let ddsfe = {}
        ddsfe.code = 0
        ddsfe.msg = "二维码生成成功"
        ddsfe.data = dasewer
        return this.json(ddsfe)
    }

    //    获取用户信息
    async getuserinfoAction() {
        var date_s = this.ctx.query
        let asdd_a = await this.getaccess_tokens(date_s.code)
        let asdd_b = await this.getuserinfo(asdd_a.access_token, asdd_a.openid)
        let sd_der = ''
        asdd_b.addtimes = new Date().getTime()
        if (date_s.type == 1) {
            sd_der = await this.add_action('wxuser', asdd_b, {
                openid: asdd_b.openid
            })
        }
        let eererrid = await this.model('wxuser').where({
            openid: asdd_b.openid
        }).find();
        delete eererrid.openid
        return this.json(eererrid)

    }
    //    微信支付
    async zhifuAction() {
        var date_s = this.ctx.query
        let data = await this.model('wxuser').where({
            id: date_s.userid
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


    //初始化
    async chuangjainerAction() {
        var date_s = this.ctx.query
        if (!cache.get('access_token')) {
            await this.getaccess_token()
        }
        let sseer = await this.chuangjiancd()
        let ddsfe = {}
        ddsfe.code = 0
        ddsfe.msg = "菜单生成成功"
        ddsfe.data = sseer
        return this.json(ddsfe)
    }

    chuangjiancd() { //创建菜单
        let qiurl = ' https://api.weixin.qq.com/cgi-bin/menu/create?access_token=' + cache.get('access_token')
        return new Promise((resolve, reject) => {
            request({
                url: qiurl,
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                body: {
                    "button": [{
                            "type": "view",
                            "name": "商城",
                            "url": "http://www.duxinggj.com/www/phone/qm"
                            },
                        {
                            "type": "click",
                            "name": "赞一下我们",
                            "key": "V1001_GOOD"
            }
                    ]
                }
            }, function (error, response, body) {
                resolve(body)
            });
        })
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

            request(qiurl, function (error, resp, json) {
                var ticketMap = JSON.parse(json);
                console.log(ticketMap.access_token);
                cache.put('access_token', ticketMap.access_token, cache_duration); //加入缓存
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


    geterweima(scene_str) { //获取ticket
        console.log(scene_str);
        var qiurl = `https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=` + cache.get('access_token')
        return new Promise((resolve, reject) => {
            request({
                url: qiurl,
                method: "POST",
                json: true,
                headers: {
                    "content-type": "application/json",
                },
                body: {
                    "action_name": "QR_LIMIT_STR_SCENE",
                    "action_info": {
                        "scene": {
                            "scene_str": scene_str
                        }
                    }
                }
            }, function (error, response, body) {
                resolve(body)
            });
        })
    }



}
