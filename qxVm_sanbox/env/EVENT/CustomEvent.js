CustomEvent = function CustomEvent(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CustomEvent);

; (function () {
    const $safe_get_attribute = ['detail'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initCustomEvent'];

    CustomEvent.prototype = {
        get detail() {
            if (!CustomEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).detail, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CustomEvent', 'detail', arguments, result);
            return result;
        },
        initCustomEvent() {
            if (!CustomEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CustomEvent', 'initCustomEvent', arguments, result);
            return result;
        }
    };
    lwVm.rename(CustomEvent.prototype, "CustomEvent");
    lwVm.safeDescriptor_addConstructor(CustomEvent);
    lwVm.safe_Objattribute(CustomEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CustomEvent.prototype, Event.prototype);
    Object.setPrototypeOf(CustomEvent, Event);

})();