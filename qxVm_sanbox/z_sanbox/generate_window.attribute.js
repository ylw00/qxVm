let win_attribute_array = Object.keys(window);

// 映射关系, key:[value, get, set, configurable, enumerable]
let get_set_attribute_map_string = "{\r\n";

// 映射关系, key:[value, configurable, enumerable, writable]
let value_attribute_map_string = "{\r\n";

function my_typeof(value) {
    return Object.prototype.toString.call(value).match(/\[object (\w+)\]/)[1];
}

for (const win_attribute_key of win_attribute_array) {
    let win_attribute_desc = Object.getOwnPropertyDescriptor(window, win_attribute_key);  // 属性的对象描述符

    let attribute_desc_keys = Object.keys(win_attribute_desc);  // 对象描述符的 keys

    let win_attribute_value = window[win_attribute_key]  // 属性名对应的 value

    let win_attribute_key_type = my_typeof(win_attribute_value);

    if (attribute_desc_keys.indexOf('get') !== -1 && attribute_desc_keys.indexOf('set') !== -1) {  // (get, set) 和value 不能同时共存
        let value, get, set, configurable, enumerable;
        switch (win_attribute_key_type) {
            case "String":
                value = `"${win_attribute_value}"`;
                break
            case "Object":
                value = win_attribute_key + "";
                break
            case "Array":
                value = `[${win_attribute_value + ""}]`
            case "Function":
                value = win_attribute_key;
                break
            default:
                if ((win_attribute_value + "").indexOf('object') !== -1) {
                    if ((win_attribute_value + "").indexOf("Window") !== -1) {
                        let str = JSON.stringify("window")
                        value = str.substring(1, str.length - 1);
                    } else {
                        let str = JSON.stringify(win_attribute_key)
                        value = str.substring(1, str.length - 1);
                    }
                } else {
                    value = win_attribute_value;
                }

        };

        get = win_attribute_desc.get ? true : false;
        set = win_attribute_desc.set !== undefined ? true : false
        configurable = win_attribute_desc.configurable;
        enumerable = win_attribute_desc.enumerable;

        get_set_attribute_map_string += `${win_attribute_key}:[${value}, ${get}, ${set}, ${configurable}, ${enumerable}],\r\n`

    } else if (attribute_desc_keys.indexOf('value') !== -1) {
        let value, configurable, enumerable, writable;

        value = win_attribute_key;
        configurable = win_attribute_desc.configurable;
        enumerable = win_attribute_desc.enumerable;
        writable = win_attribute_desc.writable;

        value_attribute_map_string += `${win_attribute_key}:[${win_attribute_key}, ${configurable}, ${enumerable}, ${writable}],\r\n`
    }
}

get_set_attribute_map_string += "}"
value_attribute_map_string += "}"

get_set_attribute_map = {
    window: [window, true, false, false, true],
    self: [window, true, true, true, true],
    document: [document, true, false, false, true],
    name: ["", true, true, true, true],
    location: [location, true, true, false, true],
    customElements: [customElements, true, false, true, true],
    history: [history, true, false, true, true],
    locationbar: [locationbar, true, true, true, true],
    menubar: [menubar, true, true, true, true],
    personalbar: [personalbar, true, true, true, true],
    scrollbars: [scrollbars, true, true, true, true],
    statusbar: [statusbar, true, true, true, true],
    toolbar: [toolbar, true, true, true, true],
    status: ["", true, true, true, true],
    closed: [false, true, false, true, true],
    frames: [window, true, true, true, true],
    length: [0, true, true, true, true],
    top: [window, true, false, false, true],
    opener: [null, true, true, true, true],
    parent: [window, true, true, true, true],
    frameElement: [null, true, false, true, true],
    navigator: [navigator, true, false, true, true],
    origin: ["edge://newtab", true, true, true, true],
    external: [external, true, true, true, true],
    screen: [screen, true, true, true, true],
    innerWidth: [2560, true, true, true, true],
    innerHeight: [1289, true, true, true, true],
    scrollX: [0, true, true, true, true],
    pageXOffset: [0, true, true, true, true],
    scrollY: [0, true, true, true, true],
    pageYOffset: [0, true, true, true, true],
    visualViewport: [visualViewport, true, true, true, true],
    screenX: [0, true, true, true, true],
    screenY: [0, true, true, true, true],
    outerWidth: [2560, true, true, true, true],
    outerHeight: [1392, true, true, true, true],
    devicePixelRatio: [1.5, true, true, true, true],
    clientInformation: [clientInformation, true, true, true, true],
    screenLeft: [0, true, true, true, true],
    screenTop: [0, true, true, true, true],
    defaultStatus: ["", true, true, true, true],
    defaultstatus: ["", true, true, true, true],
    styleMedia: [styleMedia, true, false, true, true],
    onsearch: [null, true, true, true, true],
    isSecureContext: [true, true, false, true, true],
    performance: [performance, true, true, true, true],
    onappinstalled: [null, true, true, true, true],
    onbeforeinstallprompt: [null, true, true, true, true],
    crypto: [crypto, true, false, true, true],
    indexedDB: [indexedDB, true, false, true, true],
    webkitStorageInfo: [webkitStorageInfo, true, false, true, true],
    sessionStorage: [sessionStorage, true, false, true, true],
    localStorage: [localStorage, true, false, true, true],
    onbeforexrselect: [null, true, true, true, true],
    onabort: [null, true, true, true, true],
    onblur: [null, true, true, true, true],
    oncancel: [null, true, true, true, true],
    oncanplay: [null, true, true, true, true],
    oncanplaythrough: [null, true, true, true, true],
    onchange: [null, true, true, true, true],
    onclick: [null, true, true, true, true],
    onclose: [null, true, true, true, true],
    oncontextmenu: [null, true, true, true, true],
    oncuechange: [null, true, true, true, true],
    ondblclick: [null, true, true, true, true],
    ondrag: [null, true, true, true, true],
    ondragend: [null, true, true, true, true],
    ondragenter: [null, true, true, true, true],
    ondragleave: [null, true, true, true, true],
    ondragover: [null, true, true, true, true],
    ondragstart: [null, true, true, true, true],
    ondrop: [null, true, true, true, true],
    ondurationchange: [null, true, true, true, true],
    onemptied: [null, true, true, true, true],
    onended: [null, true, true, true, true],
    onerror: [onerror, true, true, true, true],
    onfocus: [null, true, true, true, true],
    onformdata: [null, true, true, true, true],
    oninput: [null, true, true, true, true],
    oninvalid: [null, true, true, true, true],
    onkeydown: [null, true, true, true, true],
    onkeypress: [null, true, true, true, true],
    onkeyup: [null, true, true, true, true],
    onload: [null, true, true, true, true],
    onloadeddata: [null, true, true, true, true],
    onloadedmetadata: [null, true, true, true, true],
    onloadstart: [null, true, true, true, true],
    onmousedown: [null, true, true, true, true],
    onmouseenter: [null, true, true, true, true],
    onmouseleave: [null, true, true, true, true],
    onmousemove: [null, true, true, true, true],
    onmouseout: [null, true, true, true, true],
    onmouseover: [null, true, true, true, true],
    onmouseup: [null, true, true, true, true],
    onmousewheel: [null, true, true, true, true],
    onpause: [null, true, true, true, true],
    onplay: [null, true, true, true, true],
    onplaying: [null, true, true, true, true],
    onprogress: [null, true, true, true, true],
    onratechange: [null, true, true, true, true],
    onreset: [null, true, true, true, true],
    onresize: [null, true, true, true, true],
    onscroll: [null, true, true, true, true],
    onsecuritypolicyviolation: [null, true, true, true, true],
    onseeked: [null, true, true, true, true],
    onseeking: [null, true, true, true, true],
    onselect: [null, true, true, true, true],
    onslotchange: [null, true, true, true, true],
    onstalled: [null, true, true, true, true],
    onsubmit: [null, true, true, true, true],
    onsuspend: [null, true, true, true, true],
    ontimeupdate: [null, true, true, true, true],
    ontoggle: [null, true, true, true, true],
    onvolumechange: [null, true, true, true, true],
    onwaiting: [null, true, true, true, true],
    onwebkitanimationend: [null, true, true, true, true],
    onwebkitanimationiteration: [null, true, true, true, true],
    onwebkitanimationstart: [null, true, true, true, true],
    onwebkittransitionend: [null, true, true, true, true],
    onwheel: [null, true, true, true, true],
    onauxclick: [null, true, true, true, true],
    ongotpointercapture: [null, true, true, true, true],
    onlostpointercapture: [null, true, true, true, true],
    onpointerdown: [null, true, true, true, true],
    onpointermove: [null, true, true, true, true],
    onpointerup: [null, true, true, true, true],
    onpointercancel: [null, true, true, true, true],
    onpointerover: [null, true, true, true, true],
    onpointerout: [null, true, true, true, true],
    onpointerenter: [null, true, true, true, true],
    onpointerleave: [null, true, true, true, true],
    onselectstart: [null, true, true, true, true],
    onselectionchange: [null, true, true, true, true],
    onanimationend: [null, true, true, true, true],
    onanimationiteration: [null, true, true, true, true],
    onanimationstart: [null, true, true, true, true],
    ontransitionrun: [null, true, true, true, true],
    ontransitionstart: [null, true, true, true, true],
    ontransitionend: [null, true, true, true, true],
    ontransitioncancel: [null, true, true, true, true],
    onafterprint: [null, true, true, true, true],
    onbeforeprint: [null, true, true, true, true],
    onbeforeunload: [null, true, true, true, true],
    onhashchange: [null, true, true, true, true],
    onlanguagechange: [null, true, true, true, true],
    onmessage: [null, true, true, true, true],
    onmessageerror: [null, true, true, true, true],
    onoffline: [null, true, true, true, true],
    ononline: [null, true, true, true, true],
    onpagehide: [null, true, true, true, true],
    onpageshow: [null, true, true, true, true],
    onpopstate: [null, true, true, true, true],
    onrejectionhandled: [null, true, true, true, true],
    onstorage: [null, true, true, true, true],
    onunhandledrejection: [null, true, true, true, true],
    onunload: [null, true, true, true, true],
    caches: [caches, true, false, true, true],
    cookieStore: [cookieStore, true, false, true, true],
    ondevicemotion: [null, true, true, true, true],
    ondeviceorientation: [null, true, true, true, true],
    ondeviceorientationabsolute: [null, true, true, true, true],
    oncontextlost: [null, true, true, true, true],
    oncontextrestored: [null, true, true, true, true],
    originAgentCluster: [false, true, false, true, true],
    trustedTypes: [trustedTypes, true, false, true, true],
    speechSynthesis: [speechSynthesis, true, false, true, true],
    onpointerrawupdate: [null, true, true, true, true],
    crossOriginIsolated: [false, true, false, true, true],
    scheduler: [scheduler, true, true, true, true],
}


for (const key in get_set_attribute_map) {
    if (Object.hasOwnProperty.call(get_set_attribute_map, key)) {
        let { value, get, set, configurable, enumerable } = get_set_attribute_map[key];

        let desc = {
            get() { return value },
            set(value) { debugger; },
            configurable: configurable,
            enumerable: enumerable
        }
        if (set === false) {
            desc.set = undefined;
        }
        Object.defineProperty(window, key, desc);

        qxVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['get'], `get ${key}`, true);
        if (set === true) {
            qxVm.safefunction(Object.getOwnPropertyDescriptor(window, key)['set'], `set ${key}`, true);
        }
    }
}





function defineProperty(obj, key, value, configurable, enumerable, writable, getter, setter) {
    let attr = {
        configurable: configurable,
        enumerable: enumerable
    }
    if (value !== undefined) {
        attr["value"] = value
    }
    if (writable !== undefined) {
        attr["writable"] = writable
    }
    if (getter) {
        attr["get"] = getter
    }
    if (setter) {
        attr["set"] = setter
    }

    Object.defineProperty(obj, key, attr)
}