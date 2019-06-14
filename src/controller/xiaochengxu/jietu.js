const Base = require('../base_nb.js');
var webshot = require('webshot')
//添加分类
module.exports = class extends Base {

    async indexAction() {
        var options = { 
            screenSize: {  
                width: 375 ,
                height: 660  
            },
            shotSize: {  
                width: 375 ,
                height: '660' 
            }
        };  
        webshot('https://api.cangniaowl.com/shop/230.html#/', 'flickr.png', options, function (err) {  // screenshot now saved to flickr.jpeg 
      
        });


    }

}
