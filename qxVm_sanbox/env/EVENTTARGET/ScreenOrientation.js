ScreenOrientation = function ScreenOrientation(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(ScreenOrientation);

; (function () {
    const $safe_get_attribute = ['angle', 'onchange', 'type'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = ['lock', 'unlock'];

    ScreenOrientation.prototype = {
        get angle() {
            debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        lock() {
            debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onchange() {
            debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onchange, null);
        },
        set onchange(value) {
            // debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            // qxVm.memory.private_data.get(this).onchange = value + "";
        },
        get type() {
            debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "landscape-primary";
        },
        unlock() {
            debugger;
            if (!ScreenOrientation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    }
    qxVm.rename(ScreenOrientation.prototype, "ScreenOrientation");
    qxVm.safeDescriptor_addConstructor(ScreenOrientation);
    qxVm.safe_Objattribute(ScreenOrientation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);
    Object.setPrototypeOf(ScreenOrientation, EventTarget);

})();

