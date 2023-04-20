const fs = require("fs");
const TOOLS_NODE = require('../env/TOOLS/_qxVm.TOOLS.NODE');
const BASE_OBJ_NODE = require('../env/BASE_CONFIG/_qxVm.BASE_CONFIG.node');
const EVENT_NODE = require('../env/EVENT/_qxVm.EVENT.NODE');
const EVENTTARGET_NODE = require('../env/EVENTTARGET/_qxVm.EVENTTARGET.NODE');
const BOM_NODE = require('../env/BOM/_qxVm.BOM.NODE');
const DOM_NODE = require('../env/DOM/_qxVm.DOM.NODE');
const VM_PROXYOBJ = require('../env/TOOLS/vm_proxyObj');
/*
导包顺序就是继承关系的顺序
*/

function qxVm_env_generate(user_config_str) {
    let code = "";

    code += `${TOOLS_NODE.Get_tools_node_code()}\r\n`;  // 自己封装的工具

    code += user_config_str.pop('proxy_config_str');  // 代理配置

    code += user_config_str.pop('canvas_str');    // 自定义canvas指纹放到框架内存

    code += user_config_str.pop('env_str');    // 自定义浏览器环境放到框架内存

    code += user_config_str.pop('plugin_str');    // 自定义浏览器插件放到框架内存

    code += `${BASE_OBJ_NODE.Get_baseConfig_node_code()}\r\n`;  // base config

    code += `${EVENT_NODE.Get_event_node_code()}\r\n`  // event相关的Object

    code += `${EVENTTARGET_NODE.Get_eventTarget_node_code()}\r\n`  // eventTarget相关的Object

    code += `${BOM_NODE.Get_Bom_node_code()}\r\n`;  // BOM

    code += user_config_str.pop('window_attribute_str');    // 初始化 window 属性

    code += `${DOM_NODE.Get_Dom_node_code()}\r\n`;  // DOM

    code += 'qxVm.memory.htmlCollection[0] = new HTMLBodyElement(qxVm.memory.$createObj_key);\r\n\r\n';  // 初始化DOM节点
    code += 'qxVm.memory.htmlCollection[1] = new HTMLHeadElement(qxVm.memory.$createObj_key);\r\n\r\n';  // 初始化DOM节点

    code += `${VM_PROXYOBJ.vm_proxyObj()}\r\n`;  // 设置代理对象

    code += "debugger;\r\n";

    return code
}

module.exports = {
    qxVm_env: qxVm_env_generate
};

