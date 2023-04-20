HID = function HID(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HID);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getDevices', 'requestDevice'];

    HID.prototype = {
        getDevices() {
            debugger;
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onconnect() {
            debugger;
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onconnect, null);
        },
        set onconnect(value) {
            debugger;
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            debugger;
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondisconnect, null);
        },
        set ondisconnect(value) {
            debugger;
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestDevice() {
            debugger;
            if (!HID.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(HID.prototype, "HID");
    qxVm.safeDescriptor_addConstructor(HID);
    qxVm.safe_Objattribute(HID, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HID.prototype, EventTarget.prototype);
    Object.setPrototypeOf(HID, EventTarget);

})();

