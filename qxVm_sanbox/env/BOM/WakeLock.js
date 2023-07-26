WakeLock = function WakeLock(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(WakeLock);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['request'];

    WakeLock.prototype = {
        request() {
            if (!WakeLock.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'WakeLock', 'request', arguments, result);
            return result;
        },
    }
    lwVm.rename(WakeLock.prototype, "WakeLock");
    lwVm.safeDescriptor_addConstructor(WakeLock);
    lwVm.safe_Objattribute(WakeLock, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

