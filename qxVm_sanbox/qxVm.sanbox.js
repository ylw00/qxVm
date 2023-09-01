let SANBOX = require('./z_sanbox/qxVm.sanbox');


function QXVm_help(){
    console.log(`
:params js_code          用户自己的代码(可以是一个文件得绝对路径)
:params func_name        需要导出的方法
:params user_config      个性浏览器环境
    user_config:{
        isTest: Boolean             // 如果测试则固定随机数种子, 时间戳
        compress: Boolean,          // 是否压缩js, 针对 ob,sojson 检测格式化
        runConfig: Object {         // 运行中的配置
            proxy: false,           // 是否代理(默认false)
            logOpen: true           // 是否日志打印(调试模式)
        }
        canvas: String,             // 自定义canvas指纹
        window_attribute: Object,   // 自定义window属性(暴露window出来, 设置非浏览器环境对象/参数)
        plugin: Array,              // 自定义浏览器插件
        env: Object {               // 自定义浏览器环境
            navigator: Object,      // 针对 加密UA和请求UA必须一致的情况
            location: Object,       // 自定义属性
            document: Object        // 自定义属性
        }
    }
:exports: { 
    printLog: function, 
    {{func_name}}: {{func_name}},
}
    `)
}



/**
 * 注册 express APP
 * @returns express
 */
 function QXVM_registerServer() {
    let APP = express();
    APP.use(express.json({ limit: '50mb' }));
    APP.use(express.urlencoded({ limit: '50mb', extended: true }));
    APP.use(bodyParser.json({ limit: '10mb', extended: true }));
    return APP;
}


/**
 * 注册server回调,是否开始server,取决与port是否不为空
 * @param {String} method      get|post
 * @param {String} route       路由
 * @param {Number} port        端口, 如果端口为空, 则不开启服务
 * @param {Function} callback  回调
 */
function QXVM_registerCallback(method, route, port, callback) {
    let APP = QXVM_registerCallback.APP || (() => {
        QXVM_registerCallback.APP = QXVM_registerServer();
        return QXVM_registerCallback.APP;
    })()

    method = method.toLowerCase();
    APP[method](route, callback);
    if (port !== undefined && TOOLS.isNumber(port)) {
        APP.listen(port, () => {
            console.log(`框架服务开启 ${port} 端口`);
        });
    }
}




module.exports = {
    sanbox: SANBOX.QXVm_sanbox,
    help: QXVm_help,
    registerServer: QXVM_registerServer,
    registerCallback: QXVM_registerCallback,
};
