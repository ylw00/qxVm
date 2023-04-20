HTMLLabelElement = function HTMLLabelElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLLabelElement);

; (function () {
    const $safe_get_attribute = ['control', 'form', 'htmlFor'];
    const $safe_set_attribute = ['htmlFor'];
    const $safe_func_attribute = [];

    HTMLLabelElement.prototype = {
        get control() {
            debugger;
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).control, null);
        },
        get form() {
            debugger;
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).form, null);
        },
        get htmlFor() {
            debugger;
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).htmlFor, "");
        },
        set htmlFor(value) {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).htmlFor = value + "";
        },
    }

    qxVm.rename(HTMLLabelElement.prototype, "HTMLLabelElement");
    qxVm.safeDescriptor_addConstructor(HTMLLabelElement);
    qxVm.safe_Objattribute(HTMLLabelElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLabelElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLabelElement, HTMLElement);

})();


qxVm.memory.htmlElements["label"] = function () {
    return new HTMLLabelElement(qxVm.memory.$createObj_key);
}