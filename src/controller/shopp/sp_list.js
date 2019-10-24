const Base = require('../base_nb.js');
//添加列表
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
//         date_s = JSON.parse(this.decryption(date_s.token))
        date_s.addtime = new Date().getTime()
        var sd_der = ""
        if (date_s.type == 1) {
            sd_der = await this.add_action('spxq', date_s, {
                name: date_s.name
            })
        }else if (date_s.type == 2) {
            sd_der = await this.xg_action('spxq', date_s)
        } else if (date_s.type == 3) {
            sd_der = await this.get_action('spxq', date_s)
            try{
                 sd_der.spt= sd_der.spt.split(",")
            }catch(e){
                
            }
            let ssde = Object.keys(sd_der.data)
            if(ssde.length<=0){
                sd_der.code = -1
                sd_der.msg = "暂无数据"
            }
            
        } else if (date_s.type == 4) {
            sd_der = await this.del_action('spxq', date_s)
        }
        return this.fail(sd_der); //2输出json 推荐

    }

};
