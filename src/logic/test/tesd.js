//测试一下验证规则
module.exports = class extends think.Logic {
    indexAction() {
        this.rules = {
            username: {
                required: true
            }
        }
    }
};
