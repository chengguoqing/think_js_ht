function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./index.js');
//上传图片
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            console.log(_this.ctx.query);
            //        let model = this.model('user_info');
            //        let data = await model.where({
            //            id: this.cookie('user_id')
            //        }).find();
            //


            _this.emit("opend", _this.ctx);
        })();
    }

};
//# sourceMappingURL=open.js.map