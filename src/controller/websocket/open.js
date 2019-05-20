const Base = require('./index.js');
//上传图片
module.exports = class extends Base {
    async indexAction() {
        console.log(this.ctx.query);
//        let model = this.model('user_info');
//        let data = await model.where({
//            id: this.cookie('user_id')
//        }).find();
//


        this.emit("opend",this.ctx)

    }



};
