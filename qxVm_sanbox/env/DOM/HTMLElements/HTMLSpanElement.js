HTMLSpanElement = function HTMLSpanElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLSpanElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLSpanElement.prototype = {};

    lwVm.rename(HTMLSpanElement.prototype, "HTMLSpanElement");
    lwVm.safeDescriptor_addConstructor(HTMLSpanElement);
    lwVm.safe_Objattribute(HTMLSpanElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLSpanElement, HTMLElement);

})();

lwVm.memory.htmlElements["span"] = function () {
    return new HTMLSpanElement(lwVm.memory.$createObj_key);
}
