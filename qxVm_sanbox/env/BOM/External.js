External = function External(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(External);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['AddSearchProvider', 'IsSearchProviderInstalled'];

    External.prototype = {
        AddSearchProvider() {
            debugger;
            if (!External.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        IsSearchProviderInstalled() {
            debugger;
            if (!External.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(External.prototype, "External");
    qxVm.safeDescriptor_addConstructor(External);
    qxVm.safe_Objattribute(External, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
external = new External(qxVm.memory.$createObj_key);

