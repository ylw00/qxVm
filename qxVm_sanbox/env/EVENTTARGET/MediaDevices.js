MediaDevices = function MediaDevices(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(MediaDevices);

; (function () {
    const $safe_get_attribute = ['ondevicechange'];
    const $safe_set_attribute = ['ondevicechange'];
    const $safe_func_attribute = ['enumerateDevices', 'getDisplayMedia', 'getSupportedConstraints', 'getUserMedia'];

    MediaDevices.prototype = {
        enumerateDevices() {
            debugger;
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getDisplayMedia() {
            debugger;
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getSupportedConstraints() {
            debugger;
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getUserMedia() {
            debugger;
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ondevicechange() {
            debugger;
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondevicechange, null);
        },
        set ondevicechange(value) {
            debugger;
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondevicechange = value + "";
        },
    }
    qxVm.rename(MediaDevices.prototype, "MediaDevices");
    qxVm.safeDescriptor_addConstructor(MediaDevices);
    qxVm.safe_Objattribute(MediaDevices, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaDevices.prototype, EventTarget.prototype);
    Object.setPrototypeOf(MediaDevices, EventTarget);

})();