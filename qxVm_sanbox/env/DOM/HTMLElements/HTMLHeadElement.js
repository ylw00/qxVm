HTMLHeadElement = function HTMLHeadElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLHeadElement);


; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLHeadElement.prototype = {
    };

    lwVm.rename(HTMLHeadElement.prototype, "HTMLHeadElement");
    lwVm.safeDescriptor_addConstructor(HTMLHeadElement);
    lwVm.safe_Objattribute(HTMLHeadElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHeadElement, HTMLElement);
})();
lwVm.memory.htmlElements["head"] = function () {
    return new HTMLHeadElement(lwVm.memory.$createObj_key);
}


