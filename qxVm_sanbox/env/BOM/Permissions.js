Permissions = function Permissions(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Permissions);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['query'];
    
    Permissions.prototype = {
        query() {
            if (!Permissions.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Permissions', 'query', arguments, result);
            return result;
        },
    }
    lwVm.rename(Permissions.prototype, "Permissions");
    lwVm.safeDescriptor_addConstructor(Permissions);
    lwVm.safe_Objattribute(Permissions, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
