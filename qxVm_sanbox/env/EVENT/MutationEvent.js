MutationEvent = function MutationEvent(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(MutationEvent);

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
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MutationEvent', 'attrChange', arguments, result);
            return result;
        },
        get attrName() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "";;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MutationEvent', 'attrName', arguments, result);
            return result;
        },
        initMutationEvent() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MutationEvent', 'initMutationEvent', arguments, result);
            return result;
        },
        get newValue() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "";;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MutationEvent', 'newValue', arguments, result);
            return result;
        },
        get prevValue() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "";;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MutationEvent', 'prevValue', arguments, result);
            return result;
        },
        get relatedNode() {
            if (!MutationEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MutationEvent', 'relatedNode', arguments, result);
            return result;
        },
    }
    lwVm.rename(MutationEvent.prototype, "MutationEvent");
    lwVm.add_capitalLetter_attribute(MutationEvent, $attributes);
    lwVm.safeDescriptor_addConstructor(MutationEvent);
    lwVm.safe_Objattribute(MutationEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


    Object.setPrototypeOf(MutationEvent.prototype, Event.prototype);
    Object.setPrototypeOf(MutationEvent, Event);

})();

