const Base = require('./base_nb.js');
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
        if(cz.jiage ==1 ){ //价格重高到底
            ssde = 'jiage DESC' 
        }
        if(cz.jiage ==2 ){ //价格重底到高
            ssde = 'jiage ASC'
        }
        let ssdeer = {}
        if(cz.fenleiname){ //查询分类
            ssdeer = {}
            ssdeer.scchsde = ['like', '%'+cz.fenleiname+'%']
        }
        let data = await this.model('spxq').order(ssde).where(ssdeer).select();
        data.map(a => {
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
        let data = await this.model('spxq').where({
            id: cz.id
        }).find();
        data.spt = data.spt.split(",")
        let dateer = {}
        dateer.code = 0
        dateer.msg = "查询成功"
        dateer.data = data
        return this.fail(dateer); //2输出json 推荐
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
