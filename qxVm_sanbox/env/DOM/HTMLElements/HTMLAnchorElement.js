HTMLAnchorElement = function HTMLAnchorElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLAnchorElement);

; (function () {
    const $safe_get_attribute = ['charset', 'coords', 'download', 'hash', 'host', 'hostname', 'href', 'hrefTranslate', 'hreflang', 'name', 'origin', 'password', 'pathname', 'ping', 'port', 'protocol', 'referrerPolicy', 'rel', 'relList', 'rev', 'search', 'shape', 'target', 'text', 'type', 'username'];
    const $safe_set_attribute = ['charset', 'coords', 'download', 'hash', 'host', 'hostname', 'href', 'hrefTranslate', 'hreflang', 'name', 'password', 'pathname', 'ping', 'port', 'protocol', 'referrerPolicy', 'rel', 'relList', 'rev', 'search', 'shape', 'target', 'text', 'type', 'username'];
    const $safe_func_attribute = ['toString'];

    HTMLAnchorElement.prototype = {
        get charset() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).charset, "");
        },
        set charset(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).charset = value + "";
        },
        get coords() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).coords, "");
        },
        set coords(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).coords = value + "";
        },
        get download() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).download, "");
        },
        set download(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).download = value + "";
        },
        get hash() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hash, "");
        },
        set hash(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).hash = value + "";
        },
        get host() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).host, "");
        },
        set host(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).host = value + "";
        },
        get hostname() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hostname, "");
        },
        set hostname(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).hostname = value + "";
        },
        get href() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).href, "");
        },
        set href(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).href = value + "";
        },
        get hrefTranslate() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hrefTranslate, "");
        },
        set hrefTranslate(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).hrefTranslate = value + "";
        },
        get hreflang() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).hreflang, "");
        },
        set hreflang(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).hreflang = value + "";
        },
        get name() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        get origin() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).origin, "");
        },
        get password() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).password, "");
        },
        set password(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).password = value + "";
        },
        get pathname() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pathname, "");
        },
        set pathname(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).pathname = value + "";
        },
        get ping() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ping, "");
        },
        set ping(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ping = value + "";
        },
        get port() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).port, "");
        },
        set port(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).port = value + "";
        },
        get protocol() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).protocol, "");
        },
        set protocol(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).protocol = value + "";
        },
        get referrerPolicy() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).referrerPolicy, "");
        },
        set referrerPolicy(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).referrerPolicy = value + "";
        },
        get rel() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).rel, "");
        },
        set rel(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).rel = value + "";
        },
        get relList() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).relList, "");
        },
        set relList(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).relList = value + "";
        },
        get rev() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).rev, "");
        },
        set rev(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).rev = value + "";
        },
        get search() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).search, "");
        },
        set search(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).search = value + "";
        },
        get shape() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shape, "");
        },
        set shape(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).shape = value + "";
        },
        get target() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).target, "");
        },
        set target(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).target = value + "";
        },
        get text() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).text, "");
        },
        set text(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).text = value + "";
        },
        toString() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "");
        },
        set type(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        },
        get username() {
            debugger;
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).username, "");
        },
        set username(value) {
            if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).username = value + "";
        }
    }

    qxVm.rename(HTMLAnchorElement.prototype, "HTMLAnchorElement");
    qxVm.safeDescriptor_addConstructor(HTMLAnchorElement);
    qxVm.safe_Objattribute(HTMLAnchorElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLAnchorElement, HTMLElement);

})();


qxVm.memory.htmlElements["a"] = function () {
    return new HTMLAnchorElement(qxVm.memory.$createObj_key);
}