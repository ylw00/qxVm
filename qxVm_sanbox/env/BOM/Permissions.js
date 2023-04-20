Permissions = function Permissions(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Permissions);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['query'];
    
    Permissions.prototype = {
        query() {
            debugger;
            if (!Permissions.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Permissions.prototype, "Permissions");
    qxVm.safeDescriptor_addConstructor(Permissions);
    qxVm.safe_Objattribute(Permissions, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
