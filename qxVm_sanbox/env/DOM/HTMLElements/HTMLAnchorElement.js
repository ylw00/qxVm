HTMLAnchorElement = function HTMLAnchorElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLAnchorElement);

; (function () {
    const $safe_get_attribute = ['charset', 'coords', 'download', 'hash', 'host', 'hostname', 'href', 'hrefTranslate', 'hreflang', 'name', 'origin', 'password', 'pathname', 'ping', 'port', 'protocol', 'referrerPolicy', 'rel', 'relList', 'rev', 'search', 'shape', 'target', 'text', 'type', 'username'];
    const $safe_set_attribute = ['charset', 'coords', 'download', 'hash', 'host', 'hostname', 'href', 'hrefTranslate', 'hreflang', 'name', 'password', 'pathname', 'ping', 'port', 'protocol', 'referrerPolicy', 'rel', 'relList', 'rev', 'search', 'shape', 'target', 'text', 'type', 'username'];
    const $safe_func_attribute = ['toString'];

    HTMLAnchorElement.prototype = {
        get charset() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).charset, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'charset', arguments, result);
            return result;
        },
        set charset(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'charset', arguments);
            lwVm.memory.private_data.get(this).charset = value + "";
        },
        get coords() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).coords, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'coords', arguments, result);
            return result;
        },
        set coords(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'coords', arguments);
            lwVm.memory.private_data.get(this).coords = value + "";
        },
        get download() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).download, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'download', arguments, result);
            return result;
        },
        set download(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'download', arguments);
            lwVm.memory.private_data.get(this).download = value + "";
        },
        get hash() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hash, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'hash', arguments, result);
            return result;
        },
        set hash(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'hash', arguments);
            lwVm.memory.private_data.get(this).hash = value + "";
        },
        get host() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).host, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'host', arguments, result);
            return result;
        },
        set host(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'host', arguments);
            lwVm.memory.private_data.get(this).host = value + "";
        },
        get hostname() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hostname, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'hostname', arguments, result);
            return result;
        },
        set hostname(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'hostname', arguments);
            lwVm.memory.private_data.get(this).hostname = value + "";
        },
        get href() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).href, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'href', arguments, result);
            return result;
        },
        set href(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'href', arguments);
            lwVm.memory.private_data.get(this).href = value + "";
        },
        get hrefTranslate() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hrefTranslate, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'hrefTranslate', arguments, result);
            return result;
        },
        set hrefTranslate(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'hrefTranslate', arguments);
            lwVm.memory.private_data.get(this).hrefTranslate = value + "";
        },
        get hreflang() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).hreflang, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'hreflang', arguments, result);
            return result;
        },
        set hreflang(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'hreflang', arguments);
            lwVm.memory.private_data.get(this).hreflang = value + "";
        },
        get name() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).name, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'name', arguments, result);
            return result;
        },
        set name(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'name', arguments);
            lwVm.memory.private_data.get(this).name = value + "";
        },
        get origin() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).origin, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'origin', arguments, result);
            return result;
        },
        get password() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).password, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'password', arguments, result);
            return result;
        },
        set password(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'password', arguments);
            lwVm.memory.private_data.get(this).password = value + "";
        },
        get pathname() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pathname, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'pathname', arguments, result);
            return result;
        },
        set pathname(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'pathname', arguments);
            lwVm.memory.private_data.get(this).pathname = value + "";
        },
        get ping() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ping, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'ping', arguments, result);
            return result;
        },
        set ping(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'ping', arguments);
            lwVm.memory.private_data.get(this).ping = value + "";
        },
        get port() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).port, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'port', arguments, result);
            return result;
        },
        set port(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'port', arguments);
            lwVm.memory.private_data.get(this).port = value + "";
        },
        get protocol() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).protocol, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'protocol', arguments, result);
            return result;
        },
        set protocol(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'protocol', arguments);
            lwVm.memory.private_data.get(this).protocol = value + "";
        },
        get referrerPolicy() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).referrerPolicy, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'referrerPolicy', arguments, result);
            return result;
        },
        set referrerPolicy(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'referrerPolicy', arguments);
            lwVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get rel() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).rel, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'rel', arguments, result);
            return result;
        },
        set rel(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'rel', arguments);
            lwVm.memory.private_data.get(this).rel = value + "";
        },
        get relList() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).relList, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'relList', arguments, result);
            return result;
        },
        set relList(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'relList', arguments);
            lwVm.memory.private_data.get(this).relList = value + "";
        },
        get rev() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).rev, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'rev', arguments, result);
            return result;
        },
        set rev(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'rev', arguments);
            lwVm.memory.private_data.get(this).rev = value + "";
        },
        get search() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).search, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'search', arguments, result);
            return result;
        },
        set search(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'search', arguments);
            lwVm.memory.private_data.get(this).search = value + "";
        },
        get shape() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).shape, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'shape', arguments, result);
            return result;
        },
        set shape(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'shape', arguments);
            lwVm.memory.private_data.get(this).shape = value + "";
        },
        get target() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).target, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'target', arguments, result);
            return result;
        },
        set target(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'target', arguments);
            lwVm.memory.private_data.get(this).target = value + "";
        },
        get text() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).text, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'text', arguments, result);
            return result;
        },
        set text(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'text', arguments);
            lwVm.memory.private_data.get(this).text = value + "";
        },
        toString() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HTMLAnchorElement', 'toString', arguments, result);
            return result;
        },
        get type() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLAnchorElement', 'type', arguments);
            lwVm.memory.private_data.get(this).type = value + "";
        },
        get username() {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).username, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLAnchorElement', 'username', arguments, result);
            return result;
        },
        set username(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).username = value + "";
        }
    }

    lwVm.rename(HTMLAnchorElement.prototype, "HTMLAnchorElement");
    lwVm.safeDescriptor_addConstructor(HTMLAnchorElement);
    lwVm.safe_Objattribute(HTMLAnchorElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLAnchorElement, HTMLElement);

})();


lwVm.memory.htmlElements["a"] = function () {
    return new HTMLAnchorElement(lwVm.memory.$createObj_key);
}