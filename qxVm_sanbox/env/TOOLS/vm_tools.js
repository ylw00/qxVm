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
    lwVm.memory.timerId = 0;      // 定时器id保存
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


/**
 * 判断数据类型是不是纯Object {}
 * @param {*} obj 
 * @returns boolean
 */
lwVm.isObject = function (obj, allow) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}


/**
 * 区间随机数
 * @param {number} min 最小
 * @param {number} max 最大
 * @param {Boolean} isDecimal 是否是小数
 * @return {number} 
 */
lwVm.randomInt = function (min, max, isDecimal = false) {
    let result = Math.random() * (max - min + 1);
    if (isDecimal === false) {
        result = Math.floor(result)
    }
    return result + min;
}


/**
 * 对象pop
 * @param {Object} target 
 * @param {String} key 
 * @returns 
 */
lwVm.toolsObjPop = function (target, key) {
    if (!(key in target)) return undefined;
    let value = target[key];
    delete target[key];
    return value;
};


/**
 * 添加用户自定义log
 * @returns 
 */
lwVm.logAddMyLog = function (msg) {
    let log_str = `[lwVmLog] -> [${msg}]`
    lwVm.memory.logs.push(log_str);
    lwVm.console_log(log_str);
};


/**
 * 给event实例添加isTrusted属性 并设置属性描述符
 * @param {*} obj event实例
 */
lwVm.protectAddIsTrusted = function (obj) {
    Object.defineProperty(obj, 'isTrusted', {
        get() {
            return Boolean(lwVm.memory.private_data.get(obj).isTrusted);
        },
        set: undefined,
        configurable: false,
        enumerable: true
    });
    lwVm.safefunction(Object.getOwnPropertyDescriptor(obj, 'isTrusted')['get']);
}


/**
 * 强制执行事件循环
 * @param {Number} sleepTimer 是否休眠(ms)
 */
 lwVm.callEventLoop = function (sleepTimer) {
    // 后续完善
};


/**
 * 更改框架内部私有数据
 * document.body(null/true)
 * @param {*} target 
 * @param {Object} valueMap 
 */
lwVm.setPrivateDataToMemoryS = function (target, valueMap){
    let memoryTarget = lwVm.memory.private_data.get(target);
    if (memoryTarget === undefined) { return };

    for (let key in valueMap) {
        if (Object.hasOwnProperty.call(valueMap, key)) {
            let value = valueMap[key]
            memoryTarget[key] = value;
        }
    }
}

/**
 * 运行事件列表内的事件
 * @param {String} eventType 事件类型 || 0
 * @param {Object} attr 自定义事件属性
 * @returns 
 */
lwVm.callListener = function (eventType, attr, ...args) {
    // 获取事件数据
    let listenersInfo = lwVm.memory.listeners.get(eventType);  // [{},{},...]
    if (!listenersInfo) return;

    // 设置事件的自定义属性
    attr = lwVm.isObject(attr) ? attr : {};

    if (eventType.indexOf("mouse") > -1 || eventType === "click") {
        eventObj = lwVm.createEventMouse;
        runEventLoop = false;
    } else {
        eventObj = lwVm.createEvent;
        runEventLoop = true;
    }
    for (let index in listenersInfo) {
        let listenerInfo = listenersInfo[index];
        let self = listenerInfo['self'];
        if (!('target' in attr)) { attr['target'] = self; };
        listenerInfo['listener'].call(self, eventObj(eventType, attr, args));
        if (runEventLoop) {
            lwVm.callEventLoop();
        }
    }
}


/**
 * 创建浏览器createEvent事件 isTrusted: true
 * @param {String} eventType 事件类型
 * @param {String} targetParams  事件参数
 */
lwVm.createEvent = function (eventType, targetParams, ...args) {
    // 这里就开源一个load, 其它同理
    let target = lwVm.toolsObjPop(targetParams, 'target') || document.documentElement;
    let eventObj, eventAttribute;

    switch (eventType) {
        case "load":
            eventObj = new Event(eventType);
            eventAttribute = {
                "isTrusted": true,
                "bubbles": false,
                "cancelable": false,
                "defaultPrevented": false,
                "composed": false,
                "timeStamp": 0,
                "returnValue": true,
                "cancelBubble": false,
                "target": document,
                "currentTarget": window,
                "srcElement": document,
                "type": eventType,
                "path": [window],
                "eventPhase": 2,
            }
            break
        default:
            lwVm.logAddMyLog(`lwVm.createEvent->创建了一个未知的事件[${eventType}]`)
            return {};
    }

    lwVm.setPrivateDataToMemoryS(eventObj, eventAttribute);
    return eventObj;
}


lwVm.createEventMouse = function (eventType, attr, ...args) {
    attr = lwVm.isObject(attr) ? attr : {};
    if (eventType.indexOf("mouse") > -1 || eventType === "click") {

        let target = lwVm.toolsObjPop(attr, 'target') || document.documentElement;
        let eventObj = eventType === 'click' ? new PointerEvent(eventType) : new MouseEvent(eventType);
        let eventAttribute = {
            target: target,
            view: window,
            eventPhase: 3,
            srcElement: target,
            altKey: false,
            isTrusted: true,
            button: 0,
            buttons: 0,
            clientX: lwVm.randomInt(0, 100),
            clientY: lwVm.randomInt(0, 20),
            screenX: null,
            screenY: lwVm.randomInt(0, 20),
            pageX: null,
            pageY: null,
            x: null,
            y: null,
            offsetX: lwVm.randomInt(0, 100),
            offsetY: lwVm.randomInt(0, 50),
            layerX: lwVm.randomInt(0, 100),
            layerY: lwVm.randomInt(0, 50),
            movementX: lwVm.randomInt(0, 150),
            movementY: lwVm.randomInt(0, 150),
            which: 1,
            type: eventType,
            timeStamp: 0, // lwVm.getPerformanceNow() 这里不想开源
        };
        eventAttribute['screenX'] = eventAttribute['clientX']
        eventAttribute['pageX'] = eventAttribute['clientX']
        eventAttribute['pageY'] = eventAttribute['clientY']
        eventAttribute['x'] = eventAttribute['clientX']
        eventAttribute['y'] = eventAttribute['clientY']

        if (eventType === 'click') {
            eventAttribute["pointerType"] = "mouse";
            eventAttribute["relatedTarget"] = target;
            eventAttribute["currentTarget"] = target;
            eventAttribute["defaultPrevented"] = false;
            eventAttribute["returnValue"] = true;
        }

        // 更新为用户自定义参数
        if (Object.keys(attr).length) {
            for (let key in attr) {
                if (attr.hasOwnProperty(key)) {
                    eventAttribute[key] = attr[key]
                }
            }
        }
        lwVm.setPrivateDataToMemoryS(eventObj, eventAttribute)
        return eventObj;
    }
    lwVm.logAddMyLog(`lwVm.createEventMouse->创建了一个未知的鼠标事件[${eventType}]`)
    return {};
}


lwVm.pringLog = function () {

}