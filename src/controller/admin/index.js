const Base = require('../base_nb.js');
//添加分类
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
         date_s = JSON.parse(this.decryption(date_s.token))
        date_s.addtime = new Date().getTime()
        var sd_der = ""
        if (date_s.type == 1) {
            sd_der = await this.add_action('user_info', date_s, {
                user_name: date_s.user_name
            })
        }else if (date_s.type == 2) {
            sd_der = await this.xg_action('user_info', date_s)
        } else if (date_s.type == 3) {
            sd_der = await this.get_action('user_info', date_s)
          
        } else if (date_s.type == 4) {
            sd_der = await this.del_action('user_info', date_s)
        }
        return this.fail(sd_der); //2输出json 推荐

    }

};
