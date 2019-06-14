const Base = require('../base_nb.js');
import config from "../config.js"

//添加分类
module.exports = class extends Base {
    async indexAction() {
       
   var sd_der= await config.register("5153","独行工匠33","http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982")
console.log(sd_der);
        return this.fail(sd_der); //2输出json 推荐

    }




};
