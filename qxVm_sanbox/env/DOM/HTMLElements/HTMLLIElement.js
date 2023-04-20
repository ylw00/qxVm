HTMLLIElement = function HTMLLIElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLLIElement);

; (function () {
    const $safe_get_attribute = ['type', 'value'];
    const $safe_set_attribute = ['type', 'value'];
    const $safe_func_attribute = [];
    HTMLLIElement.prototype = {

        get type() {
            debugger;
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "");
        },
        set type(value) {
            debugger;
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        },
        get value() {
            debugger;
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).value, "");
        },
        set value(value) {
            debugger;
            if (!HTMLLIElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).value = value + "";
        }
    };

    qxVm.rename(HTMLLIElement.prototype, "HTMLLIElement");
    qxVm.safeDescriptor_addConstructor(HTMLLIElement);
    qxVm.safe_Objattribute(HTMLLIElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLLIElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLLIElement, HTMLElement);

})();

qxVm.memory.htmlElements["li"] = function () {
    return new HTMLLIElement(qxVm.memory.$createObj_key);
}

