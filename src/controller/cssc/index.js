const Base = require('../base_nb.js');
//首页数据
module.exports = class extends Base {
    async indexAction() {
        let data = await this.model('lunbo').select();
        let fenlei = await this.model('fenlei').select();
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = {}
        dateer.data.banner = data
        dateer.data.fenlei = fenlei
        return this.fail(dateer); //2输出json 推荐
    }
};
