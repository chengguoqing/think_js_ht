module.exports = class extends think.Controller {
  __before() {
      if(this.ctx.url!="/admin/loadin"&&!this.cookie('user_id')&&this.ctx.url.indexOf("public")<0){
            return this.fail({code:-1,msg:"登录过期请重新登录"}); //2输出json 推荐
      }
  }
};
