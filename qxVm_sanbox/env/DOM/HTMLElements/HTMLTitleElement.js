HTMLTitleElement = function HTMLTitleElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLTitleElement);



; (function () {
    const $safe_get_attribute = ['text'];
    const $safe_set_attribute = ['text'];
    const $safe_func_attribute = [];

    HTMLTitleElement.prototype = {
        get text() {
            if (!HTMLTitleElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = lwVm.abs(lwVm.memory.private_data.get(this).text, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLTitleElement', 'text', arguments, result);
            return result;
        },
        set text(value) {
            if (!HTMLTitleElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            lwVm.memory.private_data.get(this).text = value + "";
        }
    };

    lwVm.rename(HTMLTitleElement.prototype, "HTMLTitleElement");
    lwVm.safeDescriptor_addConstructor(HTMLTitleElement);
    lwVm.safe_Objattribute(HTMLTitleElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLTitleElement, HTMLElement);

})();
lwVm.memory.htmlElements["title"] = function () {
    return new HTMLTitleElement(lwVm.memory.$createObj_key);
}
