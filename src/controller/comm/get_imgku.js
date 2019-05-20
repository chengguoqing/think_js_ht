const Base = require('../base_nb.js');
//获取图片库
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        date_s = JSON.parse(this.decryption(date_s.token))
           var sd_der = ""
        sd_der = await this.get_action('imgku', date_s)
        return this.fail(sd_der); //2输出json 推荐
    }

};
