const area = require('../../util/area.js');
const Base = require('../base.js');
//获取省市区  默认获取省  type==1 获取市 2为区
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.query
        let province = area.default.province_list,
            chengsi = []
        if (date_s.type) {
            let quyu =10000
            if (date_s.type == 1) {
                province = area.default.city_list
            }
             if (date_s.type == 2) {
                 quyu=100
                province = area.default.county_list
            }
            for (var key in province) {
                let sd_der = {}
                if ((key - date_s.code) < quyu && (key - date_s.code) > 0) {
                    sd_der.name = province[key]
                    sd_der.code = key
                    chengsi.push(sd_der)
                }
            }

        } else {
            for (var key in province) {
                let sd_der = {}
                sd_der.name = province[key]
                sd_der.code = key
                chengsi.push(sd_der)
            }
        }
        return this.json(chengsi); //2输出json 推荐
    }

};
