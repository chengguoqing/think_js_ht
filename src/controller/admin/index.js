const Base = require('../base_nb.js');
import config from "../config.js"
//添加用户
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        date_s = JSON.parse(this.decryption(date_s.token))
        date_s.addtime = new Date().getTime()
        var sd_der = ""
        if (date_s.type == 1) {
            var user_id = this.randomString_wei()
           
            var sd_der = await config.register(user_id, date_s.user_name, date_s.touxiang)
            date_s.token = sd_der.token
            date_s.userId = user_id
             console.log(date_s);
            sd_der = await this.add_action('user_info', date_s, {
                user_name: date_s.user_name
            })
        } else if (date_s.type == 2) {
            sd_der = await this.xg_action('user_info', date_s)
        } else if (date_s.type == 3) {
            sd_der = await this.get_action('user_info', date_s)

        } else if (date_s.type == 4) {
            sd_der = await this.del_action('user_info', date_s)
        }
        return this.fail(sd_der); //2输出json 推荐

    }

};
