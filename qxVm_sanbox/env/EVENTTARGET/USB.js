USB = function USB(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(USB);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getDevices', 'requestDevice'];

    USB.prototype = {
        getDevices() {
            debugger;
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onconnect() {
            debugger;
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onconnect, null);
        },
        set onconnect(value) {
            debugger;
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            debugger;
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondisconnect, null);
        },
        set ondisconnect(value) {
            debugger;
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestDevice() {
            debugger;
            if (!USB.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(USB.prototype, "USB");
    qxVm.safeDescriptor_addConstructor(USB);
    qxVm.safe_Objattribute(USB, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(USB.prototype, EventTarget.prototype);
    Object.setPrototypeOf(USB, EventTarget);
})();

