NavigatorManagedData = function NavigatorManagedData(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(NavigatorManagedData);

; (function () {
    const $safe_get_attribute = ['onmanagedconfigurationchange'];
    const $safe_set_attribute = ['onmanagedconfigurationchange'];
    const $safe_func_attribute = ['getManagedConfiguration'];

    NavigatorManagedData.prototype = {
        getManagedConfiguration() {
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'NavigatorManagedData', 'getManagedConfiguration', arguments, result);
            return result;
        },
        get onmanagedconfigurationchange() {
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmanagedconfigurationchange, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NavigatorManagedData', 'onmanagedconfigurationchange', arguments, result);
            return result;
        },
        set onmanagedconfigurationchange(value) {
            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'NavigatorManagedData', 'onmanagedconfigurationchange', arguments);
            lwVm.memory.private_data.get(this).onmanagedconfigurationchange = value + "";
        },
    }
    lwVm.rename(NavigatorManagedData.prototype, "NavigatorManagedData");
    lwVm.safeDescriptor_addConstructor(NavigatorManagedData);
    lwVm.safe_Objattribute(NavigatorManagedData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(NavigatorManagedData.prototype, EventTarget.prototype);
    Object.setPrototypeOf(NavigatorManagedData, EventTarget);

})();