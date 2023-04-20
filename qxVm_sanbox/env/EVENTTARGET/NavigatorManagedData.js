NavigatorManagedData = function NavigatorManagedData(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(NavigatorManagedData);

; (function () {
    const $safe_get_attribute = ['onmanagedconfigurationchange'];
    const $safe_set_attribute = ['onmanagedconfigurationchange'];
    const $safe_func_attribute = ['getManagedConfiguration'];

    NavigatorManagedData.prototype = {
        getManagedConfiguration() {
            debugger;
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onmanagedconfigurationchange() {
            debugger;
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmanagedconfigurationchange, null);
        },
        set onmanagedconfigurationchange(value) {
            debugger;
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmanagedconfigurationchange = value + "";
        },
    }
    qxVm.rename(NavigatorManagedData.prototype, "NavigatorManagedData");
    qxVm.safeDescriptor_addConstructor(NavigatorManagedData);
    qxVm.safe_Objattribute(NavigatorManagedData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(NavigatorManagedData.prototype, EventTarget.prototype);
    Object.setPrototypeOf(NavigatorManagedData, EventTarget);

})();