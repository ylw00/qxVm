MediaDevices = function MediaDevices(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(MediaDevices);

; (function () {
    const $safe_get_attribute = ['ondevicechange'];
    const $safe_set_attribute = ['ondevicechange'];
    const $safe_func_attribute = ['enumerateDevices', 'getDisplayMedia', 'getSupportedConstraints', 'getUserMedia'];

    MediaDevices.prototype = {
        enumerateDevices() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaDevices', 'enumerateDevices', arguments, result);
            return result;
        },
        getDisplayMedia() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaDevices', 'getDisplayMedia', arguments, result);
            return result;
        },
        getSupportedConstraints() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaDevices', 'getSupportedConstraints', arguments, result);
            return result;
        },
        getUserMedia() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaDevices', 'getUserMedia', arguments, result);
            return result;
        },
        get ondevicechange() {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondevicechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaDevices', 'ondevicechange', arguments, result);
            return result;
        },
        set ondevicechange(value) {
            if (!MediaDevices.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaDevices', 'ondevicechange', arguments);
            lwVm.memory.private_data.get(this).ondevicechange = value + "";
        },
    }
    lwVm.rename(MediaDevices.prototype, "MediaDevices");
    lwVm.safeDescriptor_addConstructor(MediaDevices);
    lwVm.safe_Objattribute(MediaDevices, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MediaDevices.prototype, EventTarget.prototype);
    Object.setPrototypeOf(MediaDevices, EventTarget);

})();