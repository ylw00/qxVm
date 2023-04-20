HTMLSpanElement = function HTMLSpanElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLSpanElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLSpanElement.prototype = {};

    qxVm.rename(HTMLSpanElement.prototype, "HTMLSpanElement");
    qxVm.safeDescriptor_addConstructor(HTMLSpanElement);
    qxVm.safe_Objattribute(HTMLSpanElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLSpanElement, HTMLElement);

})();

qxVm.memory.htmlElements["span"] = function () {
    return new HTMLSpanElement(qxVm.memory.$createObj_key);
}
