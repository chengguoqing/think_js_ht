const Base = require('./pc.js');
var request = require('request'),
    cache = require('memory-cache')
var sha1 = require('sha1')
var appid = "wxf8b0c920900b2663",
    secret = "6a75e9cfe8bcad091230e42b80fd3230"
var cache_duration = 1000 * 60 * 60 * 2 //缓存时长为24小时
//async
module.exports = class extends Base {
    async indexAction() {
        let data = {}
        let token = await this.get_token()
        token = JSON.parse(token)
        let get_ticket = await this.get_ticket(token.access_token)
        get_ticket = JSON.parse(get_ticket)
        let jsond = this.kh_sd(get_ticket.ticket, 'http://www.duxinggj.com'+this.ctx.url)
        cache.put('jiami', jsond, cache_duration); //加入缓存
        data = jsond
        console.log('http://www.duxinggj.com'+this.ctx.url);
        console.log(data);
        this.assign(data);
        return this.display();
    }
    get_token() {
        return new Promise((resolve, reject) => {
            request({
                url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
                method: 'get'
            }, function (err, response, body) {
                resolve(body)
            });
        })

    }
    get_ticket(token) {
        return new Promise((resolve, reject) => {
            request({
                url: `http://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=${token}`,
                method: 'get'
            }, function (err, response, body) {
                resolve(body)
            });
        })

    }
    kh_sd(ticket, url) {
        var sd_jh = {}
        sd_jh.appId = appid
        sd_jh.nonceStr = this.randomString()
        sd_jh.timestamp = String(new Date().getTime()) //精确到秒
        sd_jh.jsapi_ticket = ticket
        sd_jh.signature = sha1('jsapi_ticket=' + ticket + '&noncestr=' + sd_jh.nonceStr + '&timestamp=' + sd_jh.timestamp + '&url=' + url);
        return sd_jh;
    }

};
