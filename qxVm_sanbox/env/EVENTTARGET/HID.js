HID = function HID(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HID);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getDevices', 'requestDevice'];

    HID.prototype = {
        getDevices() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HID', 'getDevices', arguments, result);
            return result;
        },
        get onconnect() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onconnect, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HID', 'onconnect', arguments, result);
            return result;
        },
        set onconnect(value) {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HID', 'onconnect', arguments);
            lwVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondisconnect, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'HID', 'ondisconnect', arguments, result);
            return result;
        },
        set ondisconnect(value) {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'HID', 'ondisconnect', arguments);
            lwVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestDevice() {
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'HID', 'requestDevice', arguments, result);
            return result;
        },
    }
    lwVm.rename(HID.prototype, "HID");
    lwVm.safeDescriptor_addConstructor(HID);
    lwVm.safe_Objattribute(HID, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HID.prototype, EventTarget.prototype);
    Object.setPrototypeOf(HID, EventTarget);

})();

