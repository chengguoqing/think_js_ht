function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
var request = require('request');
var appid = "wx30f2eb708506f491",
    secret = "189e0d0d1ccb64c1d81650f5782b1048";

//微信登录获取openid
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.post();
            date_s = JSON.parse(_this.decryption(date_s.token));
            var sd_Dff = yield _this.get_oppenid(date_s.code);

            var sd_ddf = {};
            sd_ddf.code = 0;
            sd_ddf.msg = "success";
            sd_ddf.data = _this.encryption(JSON.stringify(sd_Dff));

            return _this.fail(sd_ddf); //2输出json 推荐
        })();
    }

    get_oppenid(code) {
        return new Promise((resolve, reject) => {
            request({
                url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
                method: 'get'
            }, function (err, response, body) {
                resolve(body);
            });
        });
    }

};
//# sourceMappingURL=wx_load.js.map