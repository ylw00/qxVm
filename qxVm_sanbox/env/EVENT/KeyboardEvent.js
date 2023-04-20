KeyboardEvent = function KeyboardEvent(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(KeyboardEvent);

; (function () {

    const $attributes = {
        DOM_KEY_LOCATION_LEFT: 1,
        DOM_KEY_LOCATION_NUMPAD: 3,
        DOM_KEY_LOCATION_RIGHT: 2,
        DOM_KEY_LOCATION_STANDARD: 0
    }

    const $safe_get_attribute = ['altKey', 'charCode', 'code', 'ctrlKey', 'isComposing', 'key', 'keyCode', 'location', 'metaKey', 'repeat', 'shiftKey'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getModifierState', 'initKeyboardEvent'];

    KeyboardEvent.prototype = {
        get altKey() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).altKey, "");
        },
        get charCode() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).charCode, "");
        },
        get code() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).code, "");
        },
        get ctrlKey() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ctrlKey, "");
        },
        getModifierState() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        initKeyboardEvent() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get isComposing() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).isComposing, "");
        },
        get key() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).key, "");
        },
        get keyCode() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).keyCode, "");
        },
        get location() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).location, "");
        },
        get metaKey() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).metaKey, "");
        },
        get repeat() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).repeat, "");
        },
        get shiftKey() {
            debugger;
            if (!KeyboardEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shiftKey, "");
        }
    };
    qxVm.rename(KeyboardEvent.prototype, "KeyboardEvent");
    qxVm.safeDescriptor_addConstructor(KeyboardEvent);
    qxVm.safe_Objattribute(KeyboardEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    qxVm.add_capitalLetter_attribute(KeyboardEvent, $attributes);

    Object.setPrototypeOf(KeyboardEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(KeyboardEvent, UIEvent);
})();

