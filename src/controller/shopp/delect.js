const Base = require('../base_nb.js');
//删除分类
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        let model = this.model('fenlei'),
            modeler = this.model('fenleier'),
            fenleisan = this.model('fenleisan'),
            affectedRows = ''
        if (date_s.code == 0) { //一级分类删除
            affectedRows = await model.where({
                id: date_s.id
            }).delete();
        }
        if (date_s.code == 1) { //二级分类删除
            affectedRows = await modeler.where({
                id: date_s.id
            }).delete();
        }
        if (date_s.code == 2) { //三级分类删除
            affectedRows = await fenleisan.where({
                id: date_s.id
            }).delete();
        }
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

};
