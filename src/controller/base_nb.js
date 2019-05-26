//type=1 添加 2修改  3查看 4删除 
var crypto = require('crypto');
var key = "duxinggongchengguoqingguangzoulg"
var xml2js = require('xml2js');

module.exports = class extends think.Controller {
    __before() {

            this.assign('base_url', 'https://duxinggj.com/www/static/');
        //        if (this.ctx.url != "/admin/loadin" && !this.cookie('user_id')) {
        //            return this.fail({
        //                code: -1,
        //                msg: "登录过期请重新登录"
        //            }); //2输出json 推荐
        //        }

    }
    // 调用示列 sd_der= await this.add_action('fenlei', date_s,{name:date_s.name})
    async add_action(m_eel, cz_er, leisd) {
        var model = this.model(m_eel);
        var jhde = {}
        var result = ""
        delete cz_er.type
        if (leisd) { //有条件的话就不能添加重复的
            result = await model.thenAdd(cz_er, leisd);
        } else {
            result = await model.add(cz_er);
        }
        if (result.type == "exist") { //已存在
            jhde.code = -1
            jhde.msg = '添加失败，请勿重复添加'
        } else {
            jhde.code = 0
            jhde.msg = '添加成功'
        }
        return jhde

    }

    async xg_action(m_eel, cz_er, leisd) {
        var model = this.model(m_eel);
        var jhde = {}
        var result = ""
        delete cz_er.type
        result = await model.where({
            id: cz_er.id
        }).update(cz_er);
        if (result.type == "exist") { //已存在
            jhde.code = -1
            jhde.msg = '修改失败'
        } else {
            jhde.code = 0
            jhde.msg = '修改成功'
        }
        return jhde

    }


    // 调用示列  sd_der = await this.get_action('fenlei', date_s)
    async get_action(m_eel, cz_er, leisd) {
        var model = this.model(m_eel);
        var jhde = {}
        var data = ""
        delete cz_er.type
        console.log(cz_er);
        if (cz_er.page && cz_er.name) { //有分页的查询 且有分页查询
            data = await model.page(cz_er.page).order('id DESC').where({
                name: ['like', `%${cz_er.name||""}%`]
            }).countSelect();
        } else if (cz_er.page && cz_er.user_name) { //有分页的查询 且有分页查询
            data = await model.page(cz_er.page).order('id DESC').where({
                user_name: ['like', `%${cz_er.user_name||""}%`]
            }).countSelect();
        } else if (cz_er.page) { //有分页的查询
            data = await model.page(cz_er.page, cz_er.yema || 10).order('id DESC').countSelect();
        } else if (cz_er.id) { //根据id查询的
            data = await model.where({
                id: cz_er.id
            }).find();
        }
        console.log(JSON.stringify(cz_er));
        var sd_ddf = {}
        sd_ddf.code = 0
        sd_ddf.msg = "success"
        sd_ddf.data = this.encryption(JSON.stringify(data))
        return sd_ddf
    }

    //    删除
    async del_action(m_eel, cz_er) {
        var model = this.model(m_eel);
        delete cz_er.type
        let affectedRows = await model.where({
            id: cz_er.id
        }).delete();
        var jhde = {}
        if (affectedRows == 1) {
            jhde.code = 0
            jhde.msg = "删除成功"
        } else {
            jhde.code = -1
            jhde.msg = "删除失败"
        }
        return jhde; //2输出json 推荐
    }
    //加密
    encryption(data, iv) {
        iv = iv || "";
        var clearEncoding = 'utf8';
        var cipherEncoding = 'base64';
        var cipherChunks = [];
        var cipher = crypto.createCipheriv('aes-256-ecb', key, iv);
        cipher.setAutoPadding(true);
        cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
        cipherChunks.push(cipher.final(cipherEncoding));
        return cipherChunks.join('');
    }


    //解密
    decryption(data, iv) {
        if (!data) {
            return "";
        }
        iv = iv || "";
        var clearEncoding = 'utf8';
        var cipherEncoding = 'base64';
        var cipherChunks = [];
        var decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
        decipher.setAutoPadding(true);
        cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
        cipherChunks.push(decipher.final(clearEncoding));
        return cipherChunks.join('');
    }

    //    随便机数
    randomString(len) {
        len = len || 32;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
    zx(data) {
        var stringA = Object.keys(data),
            s_sdfs = ""
        //    stringA.sort()
        stringA.map(function (a) {
            s_sdfs += "&" + a + "=" + data[a]
        })
        s_sdfs = s_sdfs.substring(1, s_sdfs.length)
        return s_sdfs
    }
    buildXML(json) {
        var builder = new xml2js.Builder();
        return builder.buildObject(json);
    };

    wcf() {
        var ssr_dr = {}
        ssr_dr.appId = "wx30f2eb708506f491"
        ssr_dr.secret = '189e0d0d1ccb64c1d81650f5782b1048'
        return ssr_dr
    }



};
