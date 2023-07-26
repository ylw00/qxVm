HTMLLabelElement = function HTMLLabelElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLLabelElement);

; (function () {
    const $safe_get_attribute = ['control', 'form', 'htmlFor'];
    const $safe_set_attribute = ['htmlFor'];
    const $safe_func_attribute = [];

    HTMLLabelElement.prototype = {
        get control() {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).control, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLabelElement', 'control', arguments, result);
            return result;
        },
        get form() {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).form, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLabelElement', 'form', arguments, result);
            return result;
        },
        get htmlFor() {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).htmlFor, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLabelElement', 'htmlFor', arguments, result);
            return result;
        },
        set htmlFor(value) {
            if (!HTMLLabelElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLabelElement', 'htmlFor', arguments);
            lwVm.memory.private_data.get(this).htmlFor = value + "";
        },
    }

    lwVm.rename(HTMLLabelElement.prototype, "HTMLLabelElement");
    lwVm.safeDescriptor_addConstructor(HTMLLabelElement);
    lwVm.safe_Objattribute(HTMLLabelElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLabelElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLabelElement, HTMLElement);

})();


lwVm.memory.htmlElements["label"] = function () {
    return new HTMLLabelElement(lwVm.memory.$createObj_key);
}