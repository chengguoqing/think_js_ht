const Base = require('../base_nb.js');
var request = require('request');
var cheerio = require('cheerio')
//上传图片
module.exports = class extends Base {
    async indexAction() {
        var date_s = this.ctx.post()
        let ssde = await this.get_url(date_s.urler)
        let $ = cheerio.load(ssde);
        let sdder = []
        $(".large_box").find("li").map((a, b) => {
            sdder.push($(b).find("img").attr("src"))
        })
        let deerxw = {}
        deerxw.name = $(".skuname").text()
        deerxw.spmd = $(".subtitile").text()
        deerxw.spt = sdder.join(",")
        let ssdeeret = ''
        $(".descrip").find("img").map((a,b)=>{
            let sdsder = $(b).attr("src")
            ssdeeret+=`<img src = "${sdsder}">`
        })
        deerxw.xiqngqing = ssdeeret
        let ssdder = {}
        ssdder.code = 0
        ssdder.msg="查询成功"
        ssdder.data = deerxw
        return this.fail(ssdder); //2输出json 推荐
    }
    get_url(uree) {
        return new Promise((resolve, reject) => {
            request(uree, function (error, response, body) {
                resolve(body);
            })
        })
    }

};
