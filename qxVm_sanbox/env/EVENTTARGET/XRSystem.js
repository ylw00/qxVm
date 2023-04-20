XRSystem = function XRSystem(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(XRSystem);

; (function () {
    const $safe_get_attribute = ['ondevicechange'];
    const $safe_set_attribute = ['ondevicechange'];
    const $safe_func_attribute = ['isSessionSupported', 'requestSession', 'supportsSession'];

    XRSystem.prototype = {
        isSessionSupported() {
            debugger;
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ondevicechange() {
            debugger;
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondevicechange, null);
        },
        set ondevicechange(value) {
            debugger;
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondevicechange = value + "";
        },
        requestSession() {
            debugger;
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        supportsSession() {
            debugger;
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(XRSystem.prototype, "XRSystem");
    qxVm.safeDescriptor_addConstructor(XRSystem);
    qxVm.safe_Objattribute(XRSystem, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XRSystem.prototype, EventTarget.prototype);
    Object.setPrototypeOf(XRSystem, EventTarget);
})();

