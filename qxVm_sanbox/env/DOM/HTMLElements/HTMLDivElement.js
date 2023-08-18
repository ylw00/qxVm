HTMLDivElement = function HTMLDivElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLDivElement);

; (function () {
    const $safe_get_attribute = ['align'];
    const $safe_set_attribute = ['align'];
    const $safe_func_attribute = [];

    HTMLDivElement.prototype = {
        get align() {
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            let result = lwVm.abs(lwVm.memory.private_data.get(this).align, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLDivElement', 'align', arguments, result);
            return result;
        },
        set align(value) {
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); }
            lwVm.memory.private_data.get(this).align = value + "";
        }
    };

    lwVm.rename(HTMLDivElement.prototype, "HTMLDivElement");
    lwVm.safeDescriptor_addConstructor(HTMLDivElement);
    lwVm.safe_Objattribute(HTMLDivElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLDivElement, HTMLElement);

})();

lwVm.memory.htmlElements["div"] = function () {
    return new HTMLDivElement(lwVm.memory.$createObj_key);
}

