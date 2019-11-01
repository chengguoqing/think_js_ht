const Base = require('../base_nb.js');
var request = require('request');

//获取经纬度
module.exports = class extends Base {
    async indexAction() {
        let sdde = await this.model('lunbo').add({imgurl: 'xxx'});
          return this.fail({id:sdde}); //2输出json 推荐
    }

};
