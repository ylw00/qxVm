Location = function Location() {
    throw new TypeError("TypeError", "Illegal constructor")
}; qxVm.safefunction(Location);
location = {};

; (function () {
    Location.prototype = {};
    qxVm.rename(Location.prototype, "Location");
    qxVm.safeDescriptor_addConstructor(Location);


    const $safe_get_attribute = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
    const $safe_set_attribute = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
    const $safe_func_attribute = ['ancestorOrigins', 'assign', 'reload', 'replace', 'toString'];
    let $attribute_map = {
        hash: "",
        host: "newtab",
        hostname: "newtab",
        href: "chrome://newtab/",
        origin: "chrome://newtab",
        pathname: "/",
        port: "",
        protocol: "chrome:",
        search: ""
    };

    location = {
        ancestorOrigins() {
            debugger;
            return new class DOMStringList { }
        },
        assign() {
            debugger;
        },
        get hash() {
            return $attribute_map.hash
        },
        set hash(value) {
            $attribute_map.hash = value
        },

        get host() {
            return $attribute_map.host
        },
        set host(value) {
            $attribute_map.host = value
        },

        get hostname() {
            return $attribute_map.hostname
        },
        set hostname(value) {
            $attribute_map.hostname = value
        },

        get href() {
            return $attribute_map.href
        },
        set href(value) {
            let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            location.protocol = a[1] ? a[1] : "";
            location.host = a[2] ? a[2] : "";
            location.port = a[3] ? a[3] : "";
            location.pathname = a[4] ? a[4] : "";
            location.search = a[5] ? a[5] : "";
            location.hash = a[6] ? a[6] : "";
            location.hostname = location.host;
            location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
            $attribute_map.href = value;
        },

        get origin() {
            return $attribute_map.origin
        },
        set origin(value) {
            $attribute_map.origin = value
        },

        get pathname() {
            return $attribute_map.pathname
        },
        set pathname(value) {
            $attribute_map.pathname = value
        },

        get port() {
            return $attribute_map.port
        },
        set port(value) {
            $attribute_map.port = value
        },

        get protocol() {
            return $attribute_map.protocol
        },
        set protocol(value) {
            $attribute_map.protocol = value
        },
        reload() {
            debugger;
        },
        replace() {
            debugger;
        },
        get search() {
            return $attribute_map.search
        },
        set search(value) {
            $attribute_map.search = value
        },
        toString() {
            return location.href
        }
    };
    // 添加两个特殊的属性
    Object.defineProperty(location, 'valueOf', { value: valueOf, configurable: false, enumerable: false, writable: false });
    Object.defineProperties(location, { [Symbol.toPrimitive]: { value: undefined, configurable: false, enumerable: false, writable: false } });

    for (let key of $safe_get_attribute) {
        Object.defineProperty(location, key, {
            configurable: false,
            enumerable: true
        });
        qxVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['get']);
        qxVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['set']);
    };

    for (let key of $safe_func_attribute) {
        Object.defineProperty(location, key, {
            value: location[key],
            configurable: false,
            enumerable: true,
            writable: false
        });
        qxVm.safefunction(Object.getOwnPropertyDescriptor(location, key)['value'])
    }
    Object.setPrototypeOf(location, Location.prototype);

    // 初始化用户配置
    location.href = qxVm.default_envs['location']['href'];
})()

