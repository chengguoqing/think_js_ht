const Base = require('../base_nb.js');
//登录接口
module.exports = class extends Base {
    async indexAction() {
        let model = this.model('user_info'),
            date_s = this.ctx.post()
//        date_s = JSON.parse(this.decryption(date_s.token))
        let data = await model.where({
            user_name: date_s.user_name,
            user_paw: date_s.user_paw
        }).find();
        let sd_ddff = {}
        if (think.isEmpty(data)) {
            sd_ddff.code = -1
            sd_ddff.msg = "用户名或密码错误"
        } else {
            sd_ddff.code = 0
            sd_ddff.msg = "查询成功"
            sd_ddff.data = data
        }
        var sd_ddf = {}
        sd_ddf.code = 0
        sd_ddf.msg = "success"
        sd_ddf.data = this.encryption(JSON.stringify(sd_ddff))

        return this.fail(sd_ddf); //2输出json 推荐
    }
};
