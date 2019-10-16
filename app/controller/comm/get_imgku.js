function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
//获取图片库
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.post();
            date_s = JSON.parse(_this.decryption(date_s.token));
            var sd_der = "";
            sd_der = yield _this.get_action('dxtupian', date_s);
            return _this.fail(sd_der); //2输出json 推荐
        })();
    }

};
//# sourceMappingURL=get_imgku.js.map