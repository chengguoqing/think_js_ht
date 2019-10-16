function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('./pc.js');
const { time_c } = require('../util/public.js');
//async
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let model = _this.model('article');
            let data = yield model.where({ 'id': _this.ctx.query.id }).find();
            data.addtime = time_c(data.addtime);
            _this.assign(data);
            return _this.display();
        })();
    }

};
//# sourceMappingURL=wenzhang.js.map