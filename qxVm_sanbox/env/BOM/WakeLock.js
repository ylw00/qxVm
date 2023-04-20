WakeLock = function WakeLock(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(WakeLock);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['request'];

    WakeLock.prototype = {
        request() {
            debugger;
            if (!WakeLock.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(WakeLock.prototype, "WakeLock");
    qxVm.safeDescriptor_addConstructor(WakeLock);
    qxVm.safe_Objattribute(WakeLock, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

