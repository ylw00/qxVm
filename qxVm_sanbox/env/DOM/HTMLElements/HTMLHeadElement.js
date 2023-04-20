HTMLHeadElement = function HTMLHeadElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLHeadElement);


; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLHeadElement.prototype = {
    };

    qxVm.rename(HTMLHeadElement.prototype, "HTMLHeadElement");
    qxVm.safeDescriptor_addConstructor(HTMLHeadElement);
    qxVm.safe_Objattribute(HTMLHeadElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLHeadElement, HTMLElement);
})();
qxVm.memory.htmlElements["head"] = function () {
    return new HTMLHeadElement(qxVm.memory.$createObj_key);
}


