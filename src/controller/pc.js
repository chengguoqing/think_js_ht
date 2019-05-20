module.exports = class extends think.Controller {
    __before() {

        this.assign('base_url', 'http://127.0.0.1:8360/static/');
    }
};
