function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
var cache = require('memory-cache');
const tengxun_sc = require('../../util/tengxun_sc.js');
var fs = require('fs');
var request = require('request');
const {
    createCanvas,
    loadImage,
    Image
} = require('canvas');

var Canvas = require('canvas');
var gm = require('gm').subClass({
    imageMagick: true
}); // 注意使用的区别
//图片合成
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.post();
            var sd_dsf = JSON.parse(_this.decryption(date_s.token));
            //       var  sd_dsf = {
            //            id: 2
            //        }

            var sd_dse = {
                path: "/pages/xiangqing/main?id=" + sd_dsf.id
            };
            var sd_der = yield _this.get_action('spxq', {
                id: sd_dsf.id
            });
            sd_der = JSON.parse(_this.decryption(sd_der.data));
            var url_e_er = {};
            if (cache.get('access_toe')) {
                url_e_er = yield _this.getqc_ma(sd_dse, cache.get('access_toe'));
            } else {
                var js_sdf = yield _this.gettoken();
                url_e_er = yield _this.getqc_ma(sd_dse, js_sdf);
            }
            var fenmian = sd_der.spt.split(",")[0],
                baioti_ert = sd_der.name,
                jiage = sd_der.jiage.toFixed(2);
            var sdf_dff = baioti_ert.substring(0, 20) + "\n" + baioti_ert.substring(20, baioti_ert.length);

            const img_er = new Image();
            const canvas = createCanvas(375, 610);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, 375, 610);
            const myimg = yield loadImage(fenmian); //放网络图片
            ctx.drawImage(myimg, 10, 20, 355, 320);
            ctx.fillStyle = "#333";
            ctx.font = '18px Microsoft YaHei';
            ctx.fillText(sdf_dff, 10, 375);
            ctx.font = '16px Microsoft YaHei';
            ctx.fillStyle = "red";
            ctx.fillText('￥', 10, 480);
            ctx.font = '28px Microsoft YaHei';
            ctx.fillStyle = "red";
            ctx.fillText(jiage, 25, 480);
            img_er.onload = function () {
                return ctx.drawImage(img_er, 285, 435, 75, 75);
            };
            img_er.src = url_e_er.urk_dd;
            ctx.font = '10px Microsoft YaHei';
            ctx.fillStyle = "#999";
            ctx.fillText('扫描或长按小程序码', 275, 525);
            var sd_er = {};
            var sd_dseert = yield canvas.toBuffer('image/jpeg', { quality: 1 });
            sd_er.img_e = yield tengxun_sc.test_san(think.uuid() + ".jpg", sd_dseert);
            var sd_ddf = {};
            sd_ddf.code = 0;
            sd_ddf.msg = "success";
            sd_ddf.data = _this.encryption(JSON.stringify(sd_er));
            _this.assign(sd_er);
            //return this.display();

            return _this.fail(sd_ddf); //2输出json 推荐
        })();
    }

    gettoken() {
        return new Promise((resolve, reject) => {
            var wx_sdf = this.wcf();
            var cache_duration = 1000 * 60 * 60 * 2; //缓存时长为2小时
            var url_sd = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + wx_sdf.appId + "&secret=" + wx_sdf.secret;
            request(url_sd, function (error, resp, json) {
                json = JSON.parse(json).access_token;
                cache.put('access_toe', json, cache_duration);
                resolve(json);
            });
        });
    }

    getqc_ma(dekh, access_token) {
        return new Promise((resolve, reject) => {
            let url_sd = "https://api.weixin.qq.com/wxa/getwxacode?access_token=" + access_token,
                file_name = think.uuid() + ".png",
                urk_dd = "runtime/upload/" + file_name;
            var sd_eertt = request({
                url: url_sd,
                method: 'post',
                body: JSON.stringify(dekh)
            }).pipe(fs.createWriteStream(urk_dd));

            let sdsd_dse = {};
            sdsd_dse.file_name = file_name;
            sdsd_dse.urk_dd = urk_dd;
            setTimeout(a => {
                resolve(sdsd_dse);
            }, 1000);
        });
    }

};
//# sourceMappingURL=tuphec.js.map