const Base = require('./pc.js');
const {time_c} = require('../util/public.js');
//async
module.exports = class extends Base {
    async indexAction() {
        let model = this.model('article');
        let data = await model.where({'id': this.ctx.query.id}).find();
        data.addtime = time_c(data.addtime)
        this.assign(data);
        return this.display();
    }

};
