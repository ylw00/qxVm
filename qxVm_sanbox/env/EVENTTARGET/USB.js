USB = function USB(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(USB);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getDevices', 'requestDevice'];

    USB.prototype = {
        getDevices() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'USB', 'getDevices', arguments, result);
            return result;
        },
        get onconnect() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onconnect, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'USB', 'onconnect', arguments, result);
            return result;
        },
        set onconnect(value) {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'USB', 'onconnect', arguments);
            lwVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondisconnect, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'USB', 'ondisconnect', arguments, result);
            return result;
        },
        set ondisconnect(value) {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'USB', 'ondisconnect', arguments);
            lwVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestDevice() {
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'USB', 'requestDevice', arguments, result);
            return result;
        },
    }
    lwVm.rename(USB.prototype, "USB");
    lwVm.safeDescriptor_addConstructor(USB);
    lwVm.safe_Objattribute(USB, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(USB.prototype, EventTarget.prototype);
    Object.setPrototypeOf(USB, EventTarget);
})();

