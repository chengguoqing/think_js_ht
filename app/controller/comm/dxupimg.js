function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base.js');
const tengxun_sc = require('../../util/tengxun_sc.js');
const fs = require('fs');
const path = require('path');
const rename = think.promisify(fs.rename, fs); // 通过 promisify 方法把 rename 方法包装成 Promise 接口

//上传图片
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            //         this.file('image').name
            const file = _this.file('image');

            var file_name = think.uuid() + path.extname(file.name);
            const filePath = path.join(think.ROOT_PATH, "runtime/upload/" + file_name);
            think.mkdir(path.dirname(filePath));
            yield rename(file.path, filePath);
            var urk_dd = "runtime/upload/" + file_name;
            var url_e = yield tengxun_sc.test_up_etr(file_name, urk_dd);
            var msg_d = {};
            msg_d.code = 0;
            msg_d.msg = "上传成功";
            msg_d.data = {
                url: url_e
            };
            _this.fail(msg_d);
        })();
    }

};
//# sourceMappingURL=dxupimg.js.map