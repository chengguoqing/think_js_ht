module.exports = class extends think.Controller {
  __before() {
//console.log(this.cookie('user_id'));
      if(this.ctx.url!="/admin/loadin"&&!this.cookie('user_id')){
            return this.fail({code:-1,msg:"登录过期请重新登录"}); //2输出json 推荐
      }
      console.log();
        
  }
};
