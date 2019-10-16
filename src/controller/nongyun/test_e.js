const Base = require('../base_nb.js');
var request = require('request');
import config from "../config.js"

//添加分类
module.exports = class extends Base {
    async indexAction() {
        this.ctx.type = 'text/plain; charset=utf-8';
        this.body = 'hello world!';
    }





    get_url(location) {
        return new Promise((resolve, reject) => {
            request('https://m.huobi.br.com/zh-cn/', function (error, resp, json) {
                resolve(json);
            })
        })
    }
};
