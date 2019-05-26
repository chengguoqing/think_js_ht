//腾讯云上传
var tencentyun = require('tencentyun');
var COS = require('cos-nodejs-sdk-v5');
var bucket = 'duxinggj-2018',
    appid = '1251133427',
    userid = '0',
    secretId = 'AKID97qLcfl0JL8fy3uWv62jGZeU5S5WalbC',
    secretKey = 'VCgv1sUs11mKdhX8VeicHitqZ5PVMzOY',
    onceExpired = 0,
    userid = "0"


//上传到腾讯云
exports.test_up = function (name_e, call_back) {
    var cos = new COS({
        SecretId: secretId,
        SecretKey: secretKey,
    });
 
    var name_w = "public/uploads/" + name_e
    cos.sliceUploadFile({
        Bucket: 'duxinggj-2018-1251133427',
        Region: 'ap-guangzhou',
        Key: name_e,
        FilePath: './' + name_w
    }, function (err, data) {
        call_back("https://" + data.Location);
    });
}


exports.test_up_etr = function (name_e, path, call_back) {
    var cos = new COS({
        SecretId: secretId,
        SecretKey: secretKey,
    });
    return new Promise((resolve, reject) => {
        cos.sliceUploadFile({
            Bucket: 'duxinggj-2018-1251133427',
            Region: 'ap-guangzhou',
            Key: name_e,
            FilePath: './' + path
        }, function (err, data) {
            resolve("https://" + data.Location);
        });
    })
}

exports.test_san= function (name_e, path, call_back) {
    var cos = new COS({
        SecretId: secretId,
        SecretKey: secretKey,
    });
    console.log(path);
      console.log(66666666);
    return new Promise((resolve, reject) => {
        cos.putObject({
            Bucket: 'duxinggj-2018-1251133427',
            Region: 'ap-guangzhou',
            ContentLength:path.length,
            Key: name_e,
            Body: path,
            onProgress:function(e){
                console.log(e);
            } 
        }, function (err, data) {
            console.log(err);
            console.log(data);
            resolve("https://" + data.Location);
        });
    })
}





function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//exports.randomString(len)
