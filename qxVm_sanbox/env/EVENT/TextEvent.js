TextEvent = function TextEvent(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(TextEvent);

; (function () {
    const $safe_get_attribute = ['data'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initTextEvent'];

    TextEvent.prototype = {
        get data() {
            if (!TextEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).data, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'TextEvent', 'data', arguments, result);
            return result;
        },
        initTextEvent() {
            if (!TextEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TextEvent', 'initTextEvent', arguments, result);
            return result;
        },
    }
    lwVm.rename(TextEvent.prototype, "TextEvent");
    lwVm.safeDescriptor_addConstructor(TextEvent);
    lwVm.safe_Objattribute(TextEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(TextEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(TextEvent, UIEvent);
})();

