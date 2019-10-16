function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
var request = require('request');
//根据经纬度获取地址 
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.post();
            date_s = JSON.parse(_this.decryption(date_s.token));
            var assr_d = yield _this.get_url(date_s.location);

            var sd_ddf = {};
            sd_ddf.code = 0;
            sd_ddf.msg = "success";
            sd_ddf.data = _this.encryption(JSON.stringify(assr_d));

            return _this.fail(sd_ddf); //2输出json 推荐
        })();
    }
    get_url(location) {
        return new Promise((resolve, reject) => {
            request('http://restapi.amap.com/v3/geocode/regeo?key=1ca50beb27f893268297a00cdb0acdf3&location=' + location + '&poitype=&radius=1000&extensions=all&batch=false&roadlevel=0', function (error, resp, json) {
                resolve(JSON.parse(json));
            });
        });
    }

};
//# sourceMappingURL=get_diz.js.map