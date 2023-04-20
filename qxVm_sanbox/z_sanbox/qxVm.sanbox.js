const fs = require("fs");
// const { VM, VMScript } = require('vm2/index');
// const { NodeVM } = require('vm2/index');
const { VM, VMScript } = require('../lib/vm2/index');
const { NodeVM } = require('../lib/vm2/index');

const QXVM_NODE = require('./qxVm.env.js');
const TOOLS = require('../tools/qxVm.sanbox.tools');

/*
导包顺序就是继承关系的顺序
*/

// 只要这个文件运行了， 那object对象的原型链上的pop方法一定存在
Object.prototype.pop = function (key) {
    let value = this[key];
    delete this[key];
    return value
};

/**
 * @return {string}
 */
function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    return fs.readFileSync(file_path) + "\r\n"
}

function configObj_to_configStr(user_config) {
    let proxy_config = user_config.pop('proxy_config') || { proxy: false, proxy_proto: true, print_log: true };
    let env = user_config.pop('env') || {};
    let canvas = env.pop('canvas') || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==";
    let plugin = env.pop('plugin') || [
        {
            description: "Portable Document Format",
            filename: "internal-pdf-viewer",
            name: "Chrome PDF Plugin",
            MimeTypes: [{
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/x-google-chrome-pdf"
            }]
        },
        {
            description: "",
            filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
            name: "Chrome PDF Viewer",
            MimeTypes: [{ description: "", suffixes: "pdf", type: "application/pdf" }]
        },
        {
            description: "",
            filename: "internal-nacl-plugin",
            name: "Native Client",
            MimeTypes: [
                {
                    description: "Native Client Executable",
                    suffixes: "",
                    type: "application/x-nacl"
                },
                {
                    description: "Portable Native Client Executable",
                    suffixes: "",
                    type: "application/x-pnacl"
                }
            ]
        }
    ];
    let window_attribute = user_config.pop('window_attribute') || {};

    let proxy_config_str = "",
        canvas_str = "",
        env_str = "",
        plugin_str = "",
        window_attribute_str = "";

    for (let key in proxy_config) {
        proxy_config_str += proxy_config.hasOwnProperty(key) ? `qxVm.config.${key}=${proxy_config[key]};\r\n` : '';
    }
    canvas_str = `qxVm.default_envs.canvas="${canvas}"\r\n`;
    env_str = `qxVm.config_envs(${JSON.stringify(env)})\r\n`;
    for (let i = 0; i < plugin.length; i++) {
        plugin_str += `qxVm.config_plugin(${JSON.stringify(plugin[i])})\r\n`
    }
    for (let key in window_attribute) {
        window_attribute_str += window_attribute.hasOwnProperty(key) ? `window.${key}=${JSON.stringify(window_attribute[key])};\r\n` : "";
    }

    return {
        proxy_config_str: proxy_config_str,
        canvas_str: canvas_str,
        env_str: env_str,
        plugin_str: plugin_str,
        window_attribute_str: window_attribute_str
    }
}

function qxVm_sanbox(js_code, func_name, user_config) {
    console.log(`
:params js_code          用户自己的代码(可以是一个文件得绝对路径)
:params func_name        需要导出的方法
:params user_config      个性浏览器环境
    user_config:{
        isTest: Boolean             // 如果测试则固定随机数种子, 时间戳
        compress: Boolean,          // 是否压缩js, 针对 ob,sojson 检测格式化
        proxy_config: Object,       // 是否挂代理
        canvas: String,             // 自定义canvas指纹
        window_attribute: Object,   // 自定义window属性(暴露window出来)
        plugin: Array,              // 自定义浏览器插件
        env: Object {               // 自定义浏览器环境
            navigator: Object,      // 针对 加密UA和请求UA必须一致的情况
            location: Object,       // 自定义属性
            document: Object        // 自定义属性
        }
    }
    `);
    if (!TOOLS.str_is_funcName(func_name)) {
        throw TypeError(`参数 "func_name->${func_name}" 不符合规范`)
    }

    let compress = user_config.pop('compress') || false;  // 是否压缩文件, 防止 sojson , ob, 检测格式化

    let isTest = user_config.pop('isTest') || false;  // 如果测试则固定随机数种子, 时间戳

    let user_config_str = configObj_to_configStr(user_config);

    let qxVm_code = QXVM_NODE.qxVm_env(user_config_str);

    let export_func = `\r\nqxVm_module.exports = { ${func_name} }`;

    js_code = TOOLS.isFilePath(js_code) ? ReadCode(js_code) : js_code;  // 判断是不是文件路径, 如果是则去读取文件
    js_code = compress ? TOOLS.compress_jsCode(js_code) : js_code;
    js_code = isTest ? TOOLS.set_Time_Random(js_code) : js_code;

    js_code = `${qxVm_code}${js_code}${export_func}`;

    debugger;
    let qxVm_module = {
        exports: {},
        node_func: {
            setTimeout: setTimeout,
            setInterval: setInterval,
            clearTimeout: clearTimeout,
            clearInterval: clearInterval
        }
    };
    const vm = new VM({ sandbox: { qxVm_module } });
    const script = new VMScript(js_code, `${__dirname}/vmcode.js`);
    try {
        return vm.run(script);
    } catch (err) {
        console.error('Failed to execute script.', err);
    }
}


module.exports = {
    QXVm_sanbox: qxVm_sanbox
};