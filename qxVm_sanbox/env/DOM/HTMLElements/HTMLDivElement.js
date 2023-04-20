HTMLDivElement = function HTMLDivElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLDivElement);

; (function () {
    const $safe_get_attribute = ['align'];
    const $safe_set_attribute = ['align'];
    const $safe_func_attribute = [];

    HTMLDivElement.prototype = {
        get align() {
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            return qxVm.abs(qxVm.memory.private_data.get(this).align, "");
        },
        set align(value) {
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            qxVm.memory.private_data.get(this).align = value + "";
        }
    };

    qxVm.rename(HTMLDivElement.prototype, "HTMLDivElement");
    qxVm.safeDescriptor_addConstructor(HTMLDivElement);
    qxVm.safe_Objattribute(HTMLDivElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLDivElement, HTMLElement);

})();

qxVm.memory.htmlElements["div"] = function () {
    return new HTMLDivElement(qxVm.memory.$createObj_key);
}

