//商城后台
const Base = require('./base_nb.js');
const comm = require('../util/public.js');
module.exports = class extends Base {
    //用户列表
    async userlistAction() {
        var cz = this.ctx.post()
        let ssder = {}
        if (cz.nickname) {
            ssder.nickname = ['like', '%' + cz.nickname + '%']
        }
        let data = await this.model('wxuser').page(cz.page).order('id DESC').where(ssder).countSelect();
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    //订单列表
    async dingdanlistAction() {
        var cz = this.ctx.post()
        let dateer = {}
        let ssder = {}
        if (cz.oderid) {
            ssder.oderid = cz.oderid
        }
        if (cz.zftypecode) {
            ssder.zftypecode = cz.zftypecode
        }
        if (cz.userid) {
            ssder.userid = cz.userid
        }

        let data = await this.model('dingdanlist').page(cz.page).order('id DESC').where(ssder).countSelect();
        let ssdder = ['待付款', '待收货', '待收货', '退货']
        data.data.map(a => {
            a.jiagegm = '￥' + parseFloat(a.jiagegm).toFixed(2)
            a.zftypetext = ssdder[a.zftypecode - 1]
        })
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    //删除订单列表
    async deldingdanlistAction() {
        var cz = this.ctx.post()
        let dderer = await this.del_action('dingdanlist', cz)
        return this.fail(dderer); //2输出json 推荐
    }
    //修改订状态
    async xiugaidanlistAction() {
        var cz = this.ctx.post()
        let dderer = await this.xg_action('dingdanlist', cz)
        return this.fail(dderer); //2输出json 推荐
    }
    //成交订单列表
    async chengjiaolistAction() {
        var cz = this.ctx.post()
        let dateer = {}
        let ssder = {}
        if (cz.userid) {
            ssder.userid = cz.userid
        }
        if (cz.jydh) {
            ssder.jydh = cz.jydh
        }

        let data = await this.model('xiadanlist').page(cz.page).order('xiadanlist.id DESC').where(ssder).join('wxuser ON wxuser.id=xiadanlist.userid').countSelect()
        let ssdee = await this.model('xiadanlist').sum('zongjia');
        data.data.map(a => {
            a.zongjia = '￥' + parseFloat(a.zongjia).toFixed(2)
            a.zonger = '￥' + parseFloat(ssdee).toFixed(2)
        })
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    //删除订单列表
    async delchengjiaolistAction() {
        var cz = this.ctx.post()
        let affectedRows = await this.model('xiadanlist').where({
            jydh: cz.jydh
        }).delete();
        var jhde = {}
        if (affectedRows == 1) {
            jhde.code = 0
            jhde.msg = "删除成功"
        } else {
            jhde.code = -1
            jhde.msg = "删除失败"
        }
        return this.fail(jhde); //2输出json 推荐
    }

}
