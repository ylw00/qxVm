HTMLHtmlElement = function HTMLHtmlElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLHtmlElement);

; (function () {
    const $safe_get_attribute = ['version'];
    const $safe_set_attribute = ['version'];
    const $safe_func_attribute = [];

    HTMLHtmlElement.prototype = {
        get version() {
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = lwVm.abs(lwVm.memory.private_data.get(this).version, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLHtmlElement', 'version', arguments, result);
            return result;
        },
        set version(value) {
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            lwVm.memory.private_data.get(this).version = value + "";
        }
    };

    lwVm.rename(HTMLHtmlElement.prototype, "HTMLHtmlElement");
    lwVm.safeDescriptor_addConstructor(HTMLHtmlElement);
    lwVm.safe_Objattribute(HTMLHtmlElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHtmlElement, HTMLElement);
})();
lwVm.memory.htmlElements["html"] = function () {
    return new HTMLHtmlElement(lwVm.memory.$createObj_key);
}

