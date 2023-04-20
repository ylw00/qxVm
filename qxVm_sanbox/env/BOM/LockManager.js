LockManager = function LockManager(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(LockManager);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['query', 'request'];

    LockManager.prototype = {
        query() {
            debugger;
            if (!LockManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        request() {
            debugger;
            if (!LockManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(LockManager.prototype, "LockManager");
    qxVm.safeDescriptor_addConstructor(LockManager);
    qxVm.safe_Objattribute(LockManager, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

