const Base = require('./index.js');
//上传图片
module.exports = class extends Base {
   indexAction() {
      this.emit('opend', this.wsData);
   }
};
//# sourceMappingURL=addUser.js.map