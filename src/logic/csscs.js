//测试一下验证规则
module.exports = class extends think.Logic {
    qurendingxxAction() {
        let rules = {
            oderid: {
                required: true
            }
        }
        // 自定义 app_id 的错误信息
        let msgs = {
            oderid: '订单号不能为空'
        }
        if (!this.validate(rules, msgs)) {
            let dadse = {}
            dadse.code = -1
            dadse.msg = this.validateErrors
            return this.fail(dadse);
        }
    }

    adddiziAction() {
        let rules = {
            user_name: {
                required: true
            },
            user_phone: {
                required: true,
                mobile: 'zh-CN' //必须为中国的手机号
            },
            ssq: {
                required: true
            },
            xxdz: {
                required: true
            }
        }
        // 自定义 app_id 的错误信息
        let msgs = {
            user_name: '收货人不能为空',
            user_phone: '电话号码格式错误',
            ssq: "省市区不能为空",
            xxdz: "详细地址不能为空"
        }

        if (!this.validate(rules, msgs)) {
            let dadse = {}
            dadse.code = -1
            dadse.msg = this.validateErrors
            return this.fail(dadse);
        }
    }

};
