/*
这里面的方法, 是给开发者自己用的,不直接给用户使用
*/

//去掉所有的空格（中文空格、英文空格都会被替换）
lwVm.compress_jsCode = function (string_js) {
    if (string_js.length >= 100) {
        let string = string_js.replace(/\r\n/g, "");
        string = string.replace(/\n/g, "");
        return string.replace(/\s/g, "").slice(0, 100) + "......";
    }
    return string_js
};

// 首字母变大写
lwVm.titleCase = function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

// 将用户设置的属性, 设置为自己的属性
lwVm.updata_envs = function (user_envs, target_envs) {
    const target_envs_keys = Object.keys(target_envs);

    for (const key in user_envs) {
        if (target_envs_keys.indexOf(key) > -1) {
            target_envs[key] = user_envs[key];
        }
    }
};

// 判断
lwVm.inAndHasOwnProperty = function (obj, attribute) {
    return (attribute in obj) && (obj.hasOwnProperty(attribute));
    //如果返回true就是在自身上,false则在原型链上
};

// 判断这个参数 WeakMap 对象里面 这个this的参数是不是为空
lwVm.abs = function (params, value) {
    return typeof (params) === "undefined" ? value : params
}

// 获得 HTML***Element 对象的Symbol.toStringTag
lwVm.htmls_toStringTag = function (obj) {
    // HTMLLIElement 实例
    if (obj && obj.__proto__) {
        let tag = obj.__proto__[Symbol.toStringTag];
        if (tag === 'HTMLAnchorElement') return 'a';  // 标签比较特殊

        return tag.replace(/HTML/, '').replace(/Element/, '')
    };
    return undefined;
};



/**
 * 去掉所有的空格（中文空格、英文空格都会被替换）
 * @param {String} string_js 
 * @return String
 */
 lwVm.compressJsCode = function (stringJs) {
    let string_js_length = stringJs.length;
    if (string_js_length >= 100) {
        let string = stringJs.replace(/\r\n/g, "").replace(/\n/g, "").replace(/\s/g, "");
        return string.slice(0, 70) + "..." + string.slice(-30);
    }
    return stringJs
};


lwVm.callListener = function (eventType, attr, ...args) {
    // 获取事件数据
    let listenersInfo = lwVm.memory.listeners.get(eventType);  // [{},{},...]
    if (!listenersInfo) return;

    for (let index in listenersInfo) {
        let listenerInfo = listenersInfo[index];
        let self = listenerInfo['self'];
        listenerInfo['listener'].call(self);
    }
}

/**
 * 清除定时器的事件循环
 */
 lwVm.deleteTimerEventLoop = function () {
    for (let timerId in lwVm.memory.timer_map) {
        clearTimeout(timerId);
    }
    for (let timerId in lwVm.memory.timer_map) {
        clearInterval(timerId);
    }
    lwVm.memory.timerId = 0;               // 定时器id保存
    lwVm.memory.timer_map = {};   // 定时器
};


/**
 * 字符串的 Cookie 转换为 对象
 * @param {String} str_cookie 
 * @return Object
 */
 lwVm.strCookieToObject = function (str_cookie) {
    let cookie_obj = {};
    for (const iterator of str_cookie.split(';')) {
        let values = iterator.split('=');
        if (values.length == 2) {
            let key = values[0].replace(/^\s+|\s+$/g, "")
            cookie_obj[key] = values[1]
        }
    }
    return cookie_obj;
}

lwVm.pringLog = function (){

}