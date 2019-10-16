var _config = require("../config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');

//添加用户
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            var date_s = _this.ctx.post();
            date_s = JSON.parse(_this.decryption(date_s.token));
            date_s.addtime = new Date().getTime();
            var sd_der = "";
            if (date_s.type == 1) {
                var user_id = _this.randomString_wei();

                var sd_der = yield _config2.default.register(user_id, date_s.user_name, date_s.touxiang);
                date_s.token = sd_der.token;
                date_s.userId = user_id;
                console.log(date_s);
                sd_der = yield _this.add_action('user_info', date_s, {
                    user_name: date_s.user_name
                });
            } else if (date_s.type == 2) {
                sd_der = yield _this.xg_action('user_info', date_s);
            } else if (date_s.type == 3) {
                sd_der = yield _this.get_action('user_info', date_s);
            } else if (date_s.type == 4) {
                sd_der = yield _this.del_action('user_info', date_s);
            }
            return _this.fail(sd_der); //2输出json 推荐
        })();
    }

};
//# sourceMappingURL=index.js.map