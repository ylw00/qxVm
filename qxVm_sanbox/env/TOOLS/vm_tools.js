/*
这里面的方法, 是给开发者自己用的,不直接给用户使用
*/

//去掉所有的空格（中文空格、英文空格都会被替换）
qxVm.compress_jsCode = function (string_js) {
    if (string_js.length >= 100) {
        let string = string_js.replace(/\r\n/g, "");
        string = string.replace(/\n/g, "");
        return string.replace(/\s/g, "").slice(0, 100) + "......";
    }
    return string_js
};

// 首字母变大写
qxVm.titleCase = function (str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

// 将用户设置的属性, 设置为自己的属性
qxVm.updata_envs = function (user_envs, target_envs) {
    const target_envs_keys = Object.keys(target_envs);

    for (const key in user_envs) {
        if (target_envs_keys.indexOf(key) > -1) {
            target_envs[key] = user_envs[key];
        }
    }
};

// 判断
qxVm.inAndHasOwnProperty = function (obj, attribute) {
    return (attribute in obj) && (obj.hasOwnProperty(attribute));
    //如果返回true就是在自身上,false则在原型链上
};

// 判断这个参数 WeakMap 对象里面 这个this的参数是不是为空
qxVm.abs = function (params, value) {
    return typeof (params) === "undefined" ? value : params
}

// 获得 HTML***Element 对象的Symbol.toStringTag
qxVm.htmls_toStringTag = function (obj) {
    // HTMLLIElement 实例
    if (obj && obj.__proto__) {
        let tag = obj.__proto__[Symbol.toStringTag];
        if (tag === 'HTMLAnchorElement') return 'a';  // 标签比较特殊

        return tag.replace(/HTML/, '').replace(/Element/, '')
    };
    return undefined;
};

