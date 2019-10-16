function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
//登录接口
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let model = _this.model('user_info'),
                date_s = _this.ctx.post();
            date_s = JSON.parse(_this.decryption(date_s.token));
            let data = yield model.where({
                user_name: date_s.user_name,
                user_paw: date_s.user_paw
            }).find();
            let sd_ddff = {};
            if (think.isEmpty(data)) {
                sd_ddff.code = -1;
                sd_ddff.msg = "用户名或密码错误";
            } else {
                sd_ddff.code = 0;
                sd_ddff.msg = "查询成功";
                sd_ddff.data = data;
            }
            var sd_ddf = {};
            sd_ddf.code = 0;
            sd_ddf.msg = "success";
            sd_ddf.data = _this.encryption(JSON.stringify(sd_ddff));

            return _this.fail(sd_ddf); //2输出json 推荐
        })();
    }
};
//# sourceMappingURL=loadin.js.map