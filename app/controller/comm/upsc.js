function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require('../base.js');
const tengxun_sc = require('../../util/tengxun_sc.js');
const fs = require('fs');
const path = require('path');
const rename = think.promisify(fs.rename, fs); // 通过 promisify 方法把 rename 方法包装成 Promise 接口

//上传图片
module.exports = class extends Base {
    indexAction() {
        var _this = this;

        return _asyncToGenerator(function* () {

            const file = _this.file('image');
            if (_this.ctx.query.action != "config") {
                var file_name = think.uuid() + path.extname(file.name);
                const filePath = path.join(think.ROOT_PATH, "runtime/upload/" + file_name);
                think.mkdir(path.dirname(filePath));
                yield rename(file.path, filePath);
                var urk_dd = "runtime/upload/" + file_name;
                var url_e = yield tengxun_sc.test_up_etr(file_name, urk_dd);
                var msg_d = {};
                msg_d.code = 0;
                msg_d.msg = "上传成功";
                msg_d.url = url_e;
                msg_d.state = "SUCCESS";
                msg_d.data = {
                    path: url_e,
                    url: url_e
                };
            } else {
                msg_d = {
                    /* 上传图片配置项 */
                    "imageActionName": "uploadimage",
                    /* 执行上传图片的action名称 */
                    "imageFieldName": "image",
                    /* 提交的图片表单名称 */
                    "imageMaxSize": 2048000,
                    /* 上传大小限制，单位B */
                    "imageAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
                    /* 上传图片格式显示 */
                    "imageCompressEnable": true,
                    /* 是否压缩图片,默认是true */
                    "imageCompressBorder": 1600,
                    /* 图片压缩最长边限制 */
                    "imageInsertAlign": "none",
                    /* 插入的图片浮动方式 */
                    "imageUrlPrefix": "",
                    /* 图片访问路径前缀 */
                    "imagePathFormat": "/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
                    /* 上传保存路径,可以自定义保存路径和文件名格式 */
                    /* {filename} 会替换成原文件名,配置这项需要注意中文乱码问题 */
                    /* {rand:6} 会替换成随机数,后面的数字是随机数的位数 */
                    /* {time} 会替换成时间戳 */
                    /* {yyyy} 会替换成四位年份 */
                    /* {yy} 会替换成两位年份 */
                    /* {mm} 会替换成两位月份 */
                    /* {dd} 会替换成两位日期 */
                    /* {hh} 会替换成两位小时 */
                    /* {ii} 会替换成两位分钟 */
                    /* {ss} 会替换成两位秒 */
                    /* 非法字符 \ : * ? " < > | */
                    /* 具请体看线上文档: fex.baidu.com/ueditor/#use-format_upload_filename */

                    /* 涂鸦图片上传配置项 */
                    "scrawlActionName": "uploadscrawl",
                    /* 执行上传涂鸦的action名称 */
                    "scrawlFieldName": "upfile",
                    /* 提交的图片表单名称 */
                    "scrawlPathFormat": "/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
                    /* 上传保存路径,可以自定义保存路径和文件名格式 */
                    "scrawlMaxSize": 2048000,
                    /* 上传大小限制，单位B */
                    "scrawlUrlPrefix": "",
                    /* 图片访问路径前缀 */
                    "scrawlInsertAlign": "none",

                    /* 截图工具上传 */
                    "snapscreenActionName": "uploadimage",
                    /* 执行上传截图的action名称 */
                    "snapscreenPathFormat": "/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
                    /* 上传保存路径,可以自定义保存路径和文件名格式 */
                    "snapscreenUrlPrefix": "",
                    /* 图片访问路径前缀 */
                    "snapscreenInsertAlign": "none",
                    /* 插入的图片浮动方式 */

                    /* 抓取远程图片配置 */
                    "catcherLocalDomain": ["127.0.0.1", "localhost", "img.baidu.com"],
                    "catcherActionName": "catchimage",
                    /* 执行抓取远程图片的action名称 */
                    "catcherFieldName": "source",
                    /* 提交的图片列表表单名称 */
                    "catcherPathFormat": "/ueditor/jsp/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
                    /* 上传保存路径,可以自定义保存路径和文件名格式 */
                    "catcherUrlPrefix": "",
                    /* 图片访问路径前缀 */
                    "catcherMaxSize": 2048000,
                    /* 上传大小限制，单位B */
                    "catcherAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
                    /* 抓取图片格式显示 */

                    /* 上传视频配置 */
                    "videoActionName": "uploadvideo",
                    /* 执行上传视频的action名称 */
                    "videoFieldName": "upfile",
                    /* 提交的视频表单名称 */
                    "videoPathFormat": "/ueditor/jsp/upload/video/{yyyy}{mm}{dd}/{time}{rand:6}",
                    /* 上传保存路径,可以自定义保存路径和文件名格式 */
                    "videoUrlPrefix": "",
                    /* 视频访问路径前缀 */
                    "videoMaxSize": 102400000,
                    /* 上传大小限制，单位B，默认100MB */
                    "videoAllowFiles": [".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg", ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid"],
                    /* 上传视频格式显示 */

                    /* 上传文件配置 */
                    "fileActionName": "uploadfile",
                    /* controller里,执行上传视频的action名称 */
                    "fileFieldName": "upfile",
                    /* 提交的文件表单名称 */
                    "filePathFormat": "/ueditor/jsp/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}",
                    /* 上传保存路径,可以自定义保存路径和文件名格式 */
                    "fileUrlPrefix": "",
                    /* 文件访问路径前缀 */
                    "fileMaxSize": 51200000,
                    /* 上传大小限制，单位B，默认50MB */
                    "fileAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg", ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid", ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"],
                    /* 上传文件格式显示 */

                    /* 列出指定目录下的图片 */
                    "imageManagerActionName": "listimage",
                    /* 执行图片管理的action名称 */
                    "imageManagerListPath": "/ueditor/jsp/upload/image/",
                    /* 指定要列出图片的目录 */
                    "imageManagerListSize": 20,
                    /* 每次列出文件数量 */
                    "imageManagerUrlPrefix": "",
                    /* 图片访问路径前缀 */
                    "imageManagerInsertAlign": "none",
                    /* 插入的图片浮动方式 */
                    "imageManagerAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
                    /* 列出的文件类型 */

                    /* 列出指定目录下的文件 */
                    "fileManagerActionName": "listfile",
                    /* 执行文件管理的action名称 */
                    "fileManagerListPath": "/ueditor/jsp/upload/file/",
                    /* 指定要列出文件的目录 */
                    "fileManagerUrlPrefix": "",
                    /* 文件访问路径前缀 */
                    "fileManagerListSize": 20,
                    /* 每次列出文件数量 */
                    "fileManagerAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg", ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid", ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"] /* 列出的文件类型 */

                };
            }
            _this.fail(msg_d);
        })();
    }

};
//# sourceMappingURL=upsc.js.map