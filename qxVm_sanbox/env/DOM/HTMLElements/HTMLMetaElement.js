HTMLMetaElement = function HTMLMetaElement(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLMetaElement);

; (function () {
    const $safe_get_attribute = ['content', 'httpEquiv', 'media', 'name', 'scheme'];
    const $safe_set_attribute = ['content', 'httpEquiv', 'media', 'name', 'scheme'];
    const $safe_func_attribute = [];
    HTMLMetaElement.prototype = {

        get content() {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).content, "");
        },
        set content(value) {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).content = value + "";
        },
        get httpEquiv() {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).httpEquiv, "");
        },
        set httpEquiv(value) {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).httpEquiv = value + "";
        },
        get media() {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).media, "");
        },
        set media(value) {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).media = value + "";
        },
        get name() {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        set name(value) {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).name = value + "";
        },
        get scheme() {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).scheme, "");
        },
        set scheme(value) {
            debugger;
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).scheme = value + "";
        },
    }
    qxVm.rename(HTMLMetaElement.prototype, "HTMLMetaElement");
    qxVm.safeDescriptor_addConstructor(HTMLMetaElement);
    qxVm.safe_Objattribute(HTMLMetaElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLMetaElement, HTMLElement);
})();

qxVm.memory.htmlElements["meta"] = function () {
    return new HTMLMetaElement(qxVm.memory.$createObj_key);
}