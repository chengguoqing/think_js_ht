function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const area = require('../../util/area.js');
const Base = require('../base.js');
//获取省市区  默认获取省  type==1 获取市 2为区
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.query;
            let province = area.default.province_list,
                chengsi = [];
            if (date_s.type) {
                let quyu = 10000;
                if (date_s.type == 1) {
                    province = area.default.city_list;
                }
                if (date_s.type == 2) {
                    quyu = 100;
                    province = area.default.county_list;
                }
                for (var key in province) {
                    let sd_der = {};
                    if (key - date_s.code < quyu && key - date_s.code > 0) {
                        sd_der.name = province[key];
                        sd_der.code = key;
                        chengsi.push(sd_der);
                    }
                }
            } else {
                for (var key in province) {
                    let sd_der = {};
                    sd_der.name = province[key];
                    sd_der.code = key;
                    chengsi.push(sd_der);
                }
            }
            return _this.json(chengsi); //2输出json 推荐
        })();
    }

};
//# sourceMappingURL=area.js.map