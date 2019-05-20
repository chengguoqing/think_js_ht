// default config
module.exports = {
    workers: 1,
    stickyCluster: true,
    cookie: {
        domain: '',
        path: '/',
        maxAge: 10 * 3600 * 1000, // 10个小时
    }
};
