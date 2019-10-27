const Base = require('./base_nb.js');
const comm = require('../util/public.js');
module.exports = class extends Base {
    //首页数据
    async initAction() {
        let data = await this.model('lunbo').select();
        let fenlei = await this.model('fenlei').order('id DESC').select();
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = {}
        dateer.data.banner = data
        dateer.data.fenlei = fenlei
        return this.fail(dateer); //2输出json 推荐
    }
    //获取商品列表
    async getspAction() {
        let cz = this.ctx.post() //post 获取值
        let ssde = 'id DESC'
        if (cz.jiage == 1) { //价格重高到底
            ssde = 'jiage DESC'
        }
        if (cz.jiage == 2) { //价格重底到高
            ssde = 'jiage ASC'
        }
        let ssdeer = {}
        if (cz.fenleiname) { //查询分类
            ssdeer = {}
            ssdeer.scchsde = ['like', '%' + cz.fenleiname + '%']
        }
        if (cz.sousou) { //查询分类
            ssdeer = {}
            ssdeer.name = ['like', '%' + cz.sousou + '%']
        }
        let data = await this.model('spxq').page(cz.page).order(ssde).where(ssdeer).countSelect();
        data.data.map(a => {
            a.fm = a.spt.split(",")[0]
            a.jiage = parseFloat(a.jiage).toFixed(2)
        })
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    //获取收藏 关联查询
    async getshouceAction() {
        let cz = this.ctx.post() //post 获取值
        cz.userid = cz.userid || 2
        let data = await this.model('shouchang').where({
            userid: cz.userid
        }).join('spxq ON spxq.id=shouchang.shopid').countSelect();
        data.data.map(a => {
            a.fm = a.spt.split(",")[0]
        })
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }

    //获取商品详情
    async getspxqAction() {
        let cz = this.ctx.post() //post 获取值
        cz.userid = cz.userid || 2
        let shoucs = await this.model('shouchang').where({
            shopid: cz.id,
            userid: cz.userid
        }).find();


        let data = await this.model('spxq').where({
            id: cz.id
        }).find();
        data.spt = data.spt.split(",")
        data.jiage = parseFloat(data.jiage).toFixed(2)
        data.sd_drtyx = JSON.parse(data.sd_drtyx)
        data.sd_drtyx.map(a => {
            a.cls = ""
            a.jiage = parseFloat(a.jiage).toFixed(2)
            a.cbjia= parseFloat(a.cbjia).toFixed(2)
            
        })
        data.issc = shoucs.issc || 1
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    async shouchangAction() {
        let cz = this.ctx.post() //post 获取值
        cz.userid = cz.userid || 2
        cz.addtime = new Date().getTime()
        let result = await this.model('shouchang').thenAdd(cz, {
            shopid: cz.shopid,
            userid: cz.userid
        });
        if (result.type == "exist") { // 已存在的 就修改
            result = await this.model('shouchang').where({
                shopid: cz.shopid,
                userid: cz.userid
            }).update(cz);
        }
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = result
        return this.fail(dateer); //2输出json 推荐
    }


    //    立即购买
    async lijigoumaiAction() {
        let cz = this.ctx.post()
        cz.oderid = comm.random_No()
        cz.addtime = new Date().getTime()
        let deere = await this.add_action('dingdanlist', cz)
        deere.data = {}
        deere.data.oderid = cz.oderid
        return this.fail(deere); //2输出json 推荐
    }
    //    确认订单返回的信息
    async qurendingxxAction() {
        let cz = this.ctx.post()
        cz.userid = cz.userid || 2
        await this.model('dingdanlist').where({
            oderid: ['IN', cz.oderid]
        }).update({
            isgouwuce: 1
        });
        let data = await this.model('dingdanlist').where({
            oderid: ['IN', cz.oderid]
        }).order('id DESC').select();
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = {}
        let zgds = 0, // 共多少件
            zongjia = 0 //总价
        data.map(a => {
            zgds += a.numner
            zongjia += parseFloat(a.jiagegm)
        })
        dateer.data.zgds = zgds
        dateer.data.zongjia = zongjia.toFixed(2)
        dateer.data.spinfo = data
        dateer.data.dizhi = await this.model('user_dizhi').where({
            userid: cz.userid,
            morens: 'true'
        }).find();
        if (think.isEmpty(dateer.data.dizhi)) {
            dateer.data.dizhi = ''
        }
        return this.fail(dateer); //2输出json 推荐
    }
    //    购买成功请求
    async xiadanAction() {
        let cz = this.ctx.post()
        cz.addtime = new Date().getTime()
        cz.userid = cz.userid || 2
        let data = await this.model('dingdanlist').where({
            oderid: ['IN', cz.oderid]
        }).update({
            zftypecode: cz.zftypecode,
            beizhu:cz.beizhu,
            shouhuodiz:cz.shouhuodiz
        });
        cz.jydh = comm.randomString(20)
        console.log(cz.zongjia);
        await this.model('xiadanlist').add(cz);
        let dateer = {}
        dateer.code = 0
        dateer.msg = "下单成功"
        dateer.data = cz.jydh
        return this.fail(dateer); //2输出json 推荐
    }
    //    获取支付的状态
    async huoquzhifuAction() {
        let cz = this.ctx.post()
        let data = await this.model('xiadanlist').where({
            jydh: cz.jydh
        }).find();
        data.addtime=comm.time_c(data.addtime)
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }



    //获取订单列表
    async getdingdanAction() {
        let cz = this.ctx.post()
        cz.userid = cz.userid || 2
        let ssderx = {}
        if (cz.zftypecode) {
            ssderx.zftypecode = cz.zftypecode
        }
        ssderx.userid = cz.userid
        ssderx.isgouwuce = 1
        let data = await this.model('dingdanlist').page(cz.page).where(ssderx).order('id DESC').countSelect();
        let ssdder = ['待付款', '待收货', '待收货', '退货']
        data.data.map(a => {
            a.zftypetext = ssdder[a.zftypecode - 1]
            a.jiagegm = parseFloat(a.jiagegm).toFixed(2)
            a.danjie = a.danjie.toFixed(2)
        })
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }

    //   获取购物车的信息
    async getwuwudAction() {
        let cz = this.ctx.post()
        cz.userid = cz.userid || 2
        let data = await this.model('dingdanlist').where({
            userid: cz.userid,
            isgouwuce: 0
        }).order('id DESC').select();
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        data.map(a => {
            a.checked = false
            a.danjie = parseFloat(a.danjie).toFixed(2)
            a.jiagegm = parseFloat(a.jiagegm).toFixed(2)
        })
        return this.fail(dateer); //2输出json 推荐
    }
    //  删除购物车的信息
    async delwuwudAction() {
        let cz = this.ctx.post()
        let dateer = this.del_action('dingdanlist', cz)
        return this.fail(dateer); //2输出json 推荐
    }
    //    添加收货地址
    async adddiziAction() {
        let cz = this.ctx.post()
        cz.addtime = new Date().getTime()
        cz.userid = cz.userid || 2
        let data = await this.add_action('user_dizhi', cz)
        return this.fail(data); //2输出json 推荐
    }
    //    添加收货地址
    async adddiziAction() {
        let cz = this.ctx.post()
        cz.addtime = new Date().getTime()
        cz.userid = cz.userid || 2
        if (cz.morens == 'true') {
            let dizhiee = await this.model('user_dizhi').where({
                userid: cz.userid
            }).order('id DESC').select();
            let ssder = []
            dizhiee.map(a => {
                ssder.push({
                    id: a.id,
                    morens: 'false'
                })
            })
            await this.model('user_dizhi').updateMany(ssder)
        }
        let data = await this.add_action('user_dizhi', cz)
        return this.fail(data); //2输出json 推荐
    }
    //  修改购物车订单数量
    async xiugaishuliAction() {
        let cz = this.ctx.post()
        let result = await this.model('dingdanlist').where({
            oderid: cz.oderid
        }).update({
            numner: cz.numner,
            jiagegm: cz.jiagegm
        });
        let jhde = {}
        if (result.type == "exist") { //已存在
            jhde.code = -1
            jhde.msg = '修改失败'
        } else {
            jhde.code = 0
            jhde.msg = '修改成功'
        }
        return this.fail(jhde); //2输出json 推荐
    }
    // 订单统计 获取多少条记录
    async dingdandjAction() {
        let cz = this.ctx.post()
        cz.userid = cz.userid || 2
        let data = {}
        data.ddeefa = await this.model('dingdanlist').where({
            userid: cz.userid,
            zftypecode: 1
        }).count('zftypecode');
        data.ddeefb = await this.model('dingdanlist').where({
            userid: cz.userid,
            zftypecode: 2
        }).count('zftypecode');
        data.ddeefc = await this.model('dingdanlist').where({
            userid: cz.userid,
            zftypecode: 3
        }).count('zftypecode');
        data.ddeefd = await this.model('dingdanlist').where({
            userid: cz.userid,
            zftypecode: 4
        }).count('zftypecode');

        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer);
    }


    //    获取用户的收货地址
    async getdiziAction() {
        let cz = this.ctx.post()
        console.log(cz.userid);
        let data = await this.model('user_dizhi').where({
            userid: cz.userid
        }).order('id DESC').select();
        data.map(a => {
            a.morens = eval(a.morens)
        })
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    //    获取用户单个的收货地址
    async getdizidangeAction() {
        let cz = this.ctx.post()
        let data = await this.model('user_dizhi').where({
            id: cz.id
        }).find();
        data.morens = eval(data.morens)
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
    }
    //    修改用户单个的收货地址
    async xiugaidiziAction() {
        let cz = this.ctx.post()
        cz.userid = cz.userid || 2
        cz.addtime = new Date().getTime()
        if (cz.morens == 'true') {
            let dizhiee = await this.model('user_dizhi').where({
                userid: cz.userid
            }).order('id DESC').select();
            let ssder = []
            dizhiee.map(a => {
                ssder.push({
                    id: a.id,
                    morens: 'false'
                })
            })
            await this.model('user_dizhi').updateMany(ssder)
        }
        let ssdeer = await this.xg_action('user_dizhi', cz)
        return this.fail(ssdeer); //2输出json 推荐
    }
    //删除地址
    async delectdiziAction() {
        let cz = this.ctx.post()
        cz.userid = cz.userid || 2
        let daasse = await this.del_action('user_dizhi', cz)
        return this.fail(daasse); //2输出json 推荐
    }



    //获取分类
    async fenleiAction() {
        let sd_der = await this.get_action("fenlei", {
            type: 1,
            page: 1
        })
        let model = this.model('fenlei'),
            modeler = this.model('fenleier'),
            fenleisan = this.model('fenleisan'),
            qianss = []
        let data = await model.order('id DESC').select();
        for (let i = 0; i < data.length; i++) {
            data[i].code = 0
            data[i].cls = ""
            if (i == 0) {
                data[i].cls = "act"
            }
            data[i].value = data[i].name
            data[i].label = data[i].name
            data[i].children = []
            let datas = await modeler.order('id DESC').where({
                fj: data[i].id
            }).select();
            for (let j = 0; j < datas.length; j++) {
                datas[j].code = 1
                datas[j].cls = ""
                datas[j].value = datas[j].name
                datas[j].label = datas[j].name
                datas[j].children = []
                data[i].children.push(datas[j])
                let datassan = await fenleisan.order('id DESC').where({
                    fjs: datas[j].id
                }).select();
                for (let x = 0; x < datassan.length; x++) {
                    datassan[x].code = 2
                    datassan[x].cls = ""
                    datassan[x].value = datassan[x].name
                    datassan[x].label = datassan[x].name
                    datas[j].children.push(datassan[x])
                }
            }
        }
        let ssde = {}
        ssde.code = 0
        ssde.data = data
        ssde.msg = "查询成功"
        return this.fail(ssde); //2输出json 推荐
    }
};
