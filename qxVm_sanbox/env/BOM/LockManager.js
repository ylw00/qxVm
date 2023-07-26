LockManager = function LockManager(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(LockManager);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['query', 'request'];

    LockManager.prototype = {
        query() {
            if (!LockManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'LockManager', 'query', arguments, result);
            return result;
        },
        request() {
            if (!LockManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'LockManager', 'request', arguments, result);
            return result;
        },
    }
    lwVm.rename(LockManager.prototype, "LockManager");
    lwVm.safeDescriptor_addConstructor(LockManager);
    lwVm.safe_Objattribute(LockManager, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

