const fs = require("fs");
const { VM, VMScript } = require('../lib/vm2/index');

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
    // let copy_user_config = TOOLS.deepCopy(user_config)
    let copy_user_config = user_config;

    // let runConfig = copy_user_config.pop('runConfig') || { proxy: false, logOpen: false };
    let env = copy_user_config.pop('env') || {};
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
    let window_attribute = copy_user_config.pop('window_attribute') || {};

    let canvas_str = "",
        env_str = "",
        plugin_str = "",
        window_attribute_str = "";

    canvas_str = `lwVm.default_envs.canvas="${canvas}"\r\n`;
    env_str = `lwVm.config_envs(${JSON.stringify(env)})\r\n`;
    for (let i = 0; i < plugin.length; i++) {
        plugin_str += `lwVm.config_plugin(${JSON.stringify(plugin[i])})\r\n`
    }
    for (let key in window_attribute) {
        window_attribute_str += window_attribute.hasOwnProperty(key) ? `window.${key}=${JSON.stringify(window_attribute[key])};\r\n` : "";
    }

    return {
        canvas_str: canvas_str,
        env_str: env_str,
        plugin_str: plugin_str,
        window_attribute_str: window_attribute_str
    }
}


/**
 * 
 * @param {Object} runConfig 
 */
function initRunConfig(runConfig){
    let defaultConfig = { proxy: false, logOpen: false };
    for (let key in defaultConfig){
        let value = defaultConfig[key];
        if (!(key in runConfig)){
            runConfig[key] = value;
        }
    }
    return runConfig
}


function qxVm_sanbox(js_code, func_name, user_config) {
    if (!TOOLS.str_is_funcName(func_name)) {
        throw TypeError(`参数 "func_name->${func_name}" 不符合规范`)
    }
    let copy_user_config = TOOLS.deepCopy(user_config)                // 深拷贝, 防止被污染
    let compress = copy_user_config.pop('compress') || false;         // 是否压缩文件, 防止 sojson , ob, 检测格式化
    let isTest = copy_user_config.pop('isTest') || false;             // 如果测试则固定随机数种子, 时间戳
    let runConfig = initRunConfig(copy_user_config.pop('runConfig'))  // 初始化运行配置
    let user_config_str = configObj_to_configStr(copy_user_config);   // 组装配置字符串(懒得更新)

    let qxVm_code = QXVM_NODE.qxVm_env(user_config_str);
    let export_func = `\r\nlwVm_module.exports = { 
    printLog: lwVm.printLog, 
    ${func_name}: ${func_name},
}`;

    js_code = TOOLS.isFilePath(js_code) ? ReadCode(js_code) : js_code;  // 判断是不是文件路径, 如果是则去读取文件
    js_code = compress ? TOOLS.compress_jsCode(js_code) : js_code;
    js_code = isTest ? TOOLS.set_Time_Random(js_code) : js_code;
    js_code = `${js_code}${export_func}`;

    let lwVm_module = {
        exports: {},
        node_func: {
            setTimeout: setTimeout,
            setInterval: setInterval,
            clearTimeout: clearTimeout,
            clearInterval: clearInterval
        },
        nodeConfig: {
            logOpen: runConfig.logOpen,
            proxy: runConfig.proxy
        }
    };
    const vm = new VM({ sandbox: { lwVm_module } });

    const qxVm_env = new VMScript(qxVm_code, `lwVmcode.js`);
    vm.run(qxVm_env);

    const script = new VMScript(js_code, `${__dirname}/vmcode.js`);
    return vm.run(script);
}


module.exports = {
    QXVm_sanbox: qxVm_sanbox,
    QXVm_help: QXVM_NODE.QXVm_help
};