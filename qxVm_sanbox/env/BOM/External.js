External = function External(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(External);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['AddSearchProvider', 'IsSearchProviderInstalled'];

    External.prototype = {
        AddSearchProvider() {
            if (!External.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'External', 'AddSearchProvider', arguments, result);
            return result;
        },
        IsSearchProviderInstalled() {
            if (!External.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'External', 'IsSearchProviderInstalled', arguments, result);
            return result;
        },
    }
    lwVm.rename(External.prototype, "External");
    lwVm.safeDescriptor_addConstructor(External);
    lwVm.safe_Objattribute(External, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
external = new External(lwVm.memory.$createObj_key);

