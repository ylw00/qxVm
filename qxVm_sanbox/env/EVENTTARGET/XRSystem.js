XRSystem = function XRSystem(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(XRSystem);

; (function () {
    const $safe_get_attribute = ['ondevicechange'];
    const $safe_set_attribute = ['ondevicechange'];
    const $safe_func_attribute = ['isSessionSupported', 'requestSession', 'supportsSession'];

    XRSystem.prototype = {
        isSessionSupported() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'XRSystem', 'isSessionSupported', arguments, result);
            return result;
        },
        get ondevicechange() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondevicechange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'XRSystem', 'ondevicechange', arguments, result);
            return result;
        },
        set ondevicechange(value) {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'XRSystem', 'ondevicechange', arguments);
            lwVm.memory.private_data.get(this).ondevicechange = value + "";
        },
        requestSession() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'XRSystem', 'requestSession', arguments, result);
            return result;
        },
        supportsSession() {
            if (!XRSystem.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'XRSystem', 'supportsSession', arguments, result);
            return result;
        },
    }
    lwVm.rename(XRSystem.prototype, "XRSystem");
    lwVm.safeDescriptor_addConstructor(XRSystem);
    lwVm.safe_Objattribute(XRSystem, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(XRSystem.prototype, EventTarget.prototype);
    Object.setPrototypeOf(XRSystem, EventTarget);
})();

