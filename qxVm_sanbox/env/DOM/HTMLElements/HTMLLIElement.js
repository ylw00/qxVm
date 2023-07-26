HTMLLIElement = function HTMLLIElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLLIElement);

; (function () {
    const $safe_get_attribute = ['type', 'value'];
    const $safe_set_attribute = ['type', 'value'];
    const $safe_func_attribute = [];
    HTMLLIElement.prototype = {

        get type() {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLIElement', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HTMLLIElement', 'type', arguments);
            lwVm.memory.private_data.get(this).type = value + "";
        },
        get value() {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).value, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HTMLLIElement', 'value', arguments, result);
            return result;
        },
        set value(value) {
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).value = value + "";
        }
    };

    lwVm.rename(HTMLLIElement.prototype, "HTMLLIElement");
    lwVm.safeDescriptor_addConstructor(HTMLLIElement);
    lwVm.safe_Objattribute(HTMLLIElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLIElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLIElement, HTMLElement);

})();

lwVm.memory.htmlElements["li"] = function () {
    return new HTMLLIElement(lwVm.memory.$createObj_key);
}

