MutationEvent = function MutationEvent(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(MutationEvent);

; (function () {
    const $attributes = {
        ADDITION: 2,
        MODIFICATION: 1,
        REMOVAL: 3
    }

    const $safe_get_attribute = ['attrChange', 'attrName', 'newValue', 'prevValue', 'relatedNode'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initMutationEvent'];

    MutationEvent.prototype = {
        get attrChange() {
            debugger;
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get attrName() {
            debugger;
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "";
        },
        initMutationEvent() {
            debugger;
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get newValue() {
            debugger;
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "";
        },
        get prevValue() {
            debugger;
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "";
        },
        get relatedNode() {
            debugger;
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
    }
    qxVm.rename(MutationEvent.prototype, "MutationEvent");
    qxVm.add_capitalLetter_attribute(MutationEvent, $attributes);
    qxVm.safeDescriptor_addConstructor(MutationEvent);
    qxVm.safe_Objattribute(MutationEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    Object.setPrototypeOf(MutationEvent.prototype, Event.prototype);
    Object.setPrototypeOf(MutationEvent, Event);

})();

