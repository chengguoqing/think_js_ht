const Base = require('../base_nb.js');
//获取分类
module.exports = class extends Base {
    async indexAction() {
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
            data[i].value = data[i].id
            data[i].label = data[i].name
            data[i].children = []
            let datas = await modeler.order('id DESC').where({
                fj: data[i].id
            }).select();
            for (let j = 0; j < datas.length; j++) {
                datas[j].code = 1
                datas[j].value = datas[j].id
                datas[j].label = datas[j].name
                datas[j].children = []
                data[i].children.push(datas[j])
                let datassan = await fenleisan.order('id DESC').where({
                    fjs: datas[j].id
                }).select();
                for (let x = 0; x < datassan.length; x++) {
                    datassan[x].code = 2
                    datassan[x].value = datassan[x].id
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
