//测试一下验证规则
module.exports = class extends think.Logic {
    zhifuAction() {
        this.rules = {
            jiner: {
                required: true
            }
        }
    }
};
