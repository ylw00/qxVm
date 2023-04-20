HTMLHtmlElement = function HTMLHtmlElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLHtmlElement);

; (function () {
    const $safe_get_attribute = ['version'];
    const $safe_set_attribute = ['version'];
    const $safe_func_attribute = [];

    HTMLHtmlElement.prototype = {
        get version() {
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            return qxVm.abs(qxVm.memory.private_data.get(this).version, "");
        },
        set version(value) {
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            qxVm.memory.private_data.get(this).version = value + "";
        }
    };

    qxVm.rename(HTMLHtmlElement.prototype, "HTMLHtmlElement");
    qxVm.safeDescriptor_addConstructor(HTMLHtmlElement);
    qxVm.safe_Objattribute(HTMLHtmlElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHtmlElement, HTMLElement);
})();
qxVm.memory.htmlElements["html"] = function () {
    return new HTMLHtmlElement(qxVm.memory.$createObj_key);
}

