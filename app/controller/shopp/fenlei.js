function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');

//添加分类
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.post();
            date_s = JSON.parse(_this.decryption(date_s.token));
            date_s.addtime = new Date().getTime();
            var sd_der = "";
            if (date_s.type == 1) {
                sd_der = yield _this.add_action('fenlei', date_s, {
                    name: date_s.name
                });
            } else if (date_s.type == 2) {
                sd_der = yield _this.xg_action('fenlei', date_s);
            } else if (date_s.type == 3) {
                sd_der = yield _this.get_action('fenlei', date_s);
            } else if (date_s.type == 4) {
                sd_der = yield _this.del_action('fenlei', date_s);
            }
            return _this.fail(sd_der); //2输出json 推荐
        })();
    }

};
//# sourceMappingURL=fenlei.js.map