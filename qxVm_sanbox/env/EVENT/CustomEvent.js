CustomEvent = function CustomEvent(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CustomEvent);

; (function () {
    const $safe_get_attribute = ['detail'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initCustomEvent'];

    CustomEvent.prototype = {
        get detail() {
            debugger;
            if (!CustomEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).detail, "");
        },
        initCustomEvent() {
            debugger;
            if (!CustomEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };
    qxVm.rename(CustomEvent.prototype, "CustomEvent");
    qxVm.safeDescriptor_addConstructor(CustomEvent);
    qxVm.safe_Objattribute(CustomEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CustomEvent.prototype, Event.prototype);
    Object.setPrototypeOf(CustomEvent, Event);

})();