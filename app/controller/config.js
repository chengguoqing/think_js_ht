var RongSDK = require('rongcloud-sdk')({
    appkey: 'tdrvipkstxtp5',
    secret: 'o057FyMRaa'
});

module.exports = {
    register(id, name, portrait, call) {
        //注册
        return new Promise((resolve, reject) => {

            // API 文档: http://www.rongcloud.cn/docs/server/sdk/user/user.html#register
            var User = RongSDK.User;
            var user = {
                id: id,
                name: name,
                portrait: portrait
            };
            User.register(user).then(result => {
                resolve(result);
            }, error => {
                resolve(error);
            });
        });
    }
};
//# sourceMappingURL=config.js.map