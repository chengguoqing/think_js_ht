var _config = require('../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
var request = require('request');


//添加分类
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this.ctx.type = 'text/plain; charset=utf-8';
            _this.body = 'hello world!';
        })();
    }

    get_url(location) {
        return new Promise((resolve, reject) => {
            request('https://m.huobi.br.com/zh-cn/', function (error, resp, json) {
                resolve(json);
            });
        });
    }
};
//# sourceMappingURL=test_e.js.map