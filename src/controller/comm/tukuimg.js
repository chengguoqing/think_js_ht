const Base = require('../base.js');
const tengxun_sc = require('../../util/tengxun_sc.js');
const fs = require('fs');
const path = require('path');
const rename = think.promisify(fs.rename, fs); // 通过 promisify 方法把 rename 方法包装成 Promise 接口

//图库图片
module.exports = class extends Base {
    async indexAction() {
        //         this.file('image').name
        const file = this.file('image');  
        var file_name = think.uuid() + path.extname(file.name)
        const filePath = path.join(think.ROOT_PATH, "runtime/upload/" + file_name);
        think.mkdir(path.dirname(filePath));
        await rename(file.path, filePath);
        var urk_dd = "runtime/upload/" + file_name
        var url_e = await tengxun_sc.test_up_etr(file_name, urk_dd)  
        var msg_d = {}
        msg_d.code = 0
        msg_d.msg = "上传成功" 
        msg_d.data = {
            url: url_e
        }

        const model = this.model('imgKu');
        let imgKu={}
        imgKu.name=file.name
        imgKu.path=url_e
        imgKu.addTime=new Date().getTime()
        await model.add(imgKu);


        this.fail(msg_d);
    }

};
