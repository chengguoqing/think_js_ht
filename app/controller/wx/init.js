function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base.js');
var appid = 'wxf8b0c920900b2663',
    secret = '299c6ab8cf95731ea90f9d28e6b150ce',
    ticketUrl = "https://api.weixin.qq.com/cgi-bin/token",
    jsapi_ticket = "http://api.weixin.qq.com/cgi-bin/ticket/getticket",
    cache_duration = 1000 * 60 * 60 * 2; //缓存时长为2小时
var request = require('request');
const comm = require('../../util/public.js');
var sha1 = require('sha1');
var cache = require('memory-cache');
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.query;
            var xsd_sd = date_s.sd_us,
                sd_drtsae = '';
            if (cache.get('ticket')) {
                sd_drtsae = _this.kh_sd(cache.get('ticket'), xsd_sd);
                sd_drtsae.hc = true;
            } else {
                let ssd_er = yield _this.getaccess_token();
                let ssde = yield _this.getconfig(ssd_er);
                cache.put('ticket', ssde, cache_duration); //加入缓存
                sd_drtsae = _this.kh_sd(ssde, xsd_sd);
                sd_drtsae.hc = false;
            }
            return _this.json(sd_drtsae);
        })();
    }
    getaccess_token() {
        //获取token
        var qiurl = ticketUrl + `?grant_type=client_credential&appid=${appid}&secret=${secret}`;
        return new Promise((resolve, reject) => {
            console.log(qiurl);
            request(qiurl, function (error, resp, json) {
                var ticketMap = JSON.parse(json);
                var jsapi = jsapi_ticket + "?type=jsapi&access_token=" + ticketMap.access_token;
                console.log(json);
                resolve(jsapi);
            });
        });
    }
    getconfig(jsapi) {
        return new Promise((resolve, reject) => {
            request(jsapi, function (error, resp, jsoner) {
                var token_oe = JSON.parse(jsoner);
                resolve(token_oe.ticket);
            });
        });
    }
    kh_sd(ticket, url) {
        var sd_jh = {};
        sd_jh.appId = appid;
        sd_jh.nonceStr = comm.randomString();
        sd_jh.timestamp = Math.floor(Date.now() / 1000); //精确到秒
        sd_jh.jsapi_ticket = ticket;
        sd_jh.signature = sha1('jsapi_ticket=' + ticket + '&noncestr=' + sd_jh.nonceStr + '&timestamp=' + sd_jh.timestamp + '&url=' + url);
        return sd_jh;
    }

};
//# sourceMappingURL=init.js.map