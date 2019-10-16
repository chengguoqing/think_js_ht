function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base_nb.js');
var webshot = require('webshot');
//添加分类
module.exports = class extends Base {

    indexAction() {
        return _asyncToGenerator(function* () {
            var options = {
                screenSize: {
                    width: 375,
                    height: 660
                },
                shotSize: {
                    width: 375,
                    height: '660'
                }
            };
            webshot('https://api.cangniaowl.com/shop/230.html#/', 'flickr.png', options, function (err) {// screenshot now saved to flickr.jpeg 

            });
        })();
    }

};
//# sourceMappingURL=jietu.js.map