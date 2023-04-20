TextEvent = function TextEvent(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(TextEvent);

; (function () {
    const $safe_get_attribute = ['data'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initTextEvent'];

    TextEvent.prototype = {
        get data() {
            debugger;
            if (!TextEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).data, "");
        },
        initTextEvent() {
            debugger;
            if (!TextEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(TextEvent.prototype, "TextEvent");
    qxVm.safeDescriptor_addConstructor(TextEvent);
    qxVm.safe_Objattribute(TextEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(TextEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(TextEvent, UIEvent);
})();

