StorageManager = function StorageManager(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(StorageManager);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['estimate', 'getDirectory', 'persist', 'persisted'];

    StorageManager.prototype = {
        estimate() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'StorageManager', 'estimate', arguments, result);
            return result;
        },
        getDirectory() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'StorageManager', 'getDirectory', arguments, result);
            return result;
        },
        persist() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'StorageManager', 'persist', arguments, result);
            return result;
        },
        persisted() {
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'StorageManager', 'persisted', arguments, result);
            return result;
        },
    }
    lwVm.rename(StorageManager.prototype, "StorageManager");
    lwVm.safeDescriptor_addConstructor(StorageManager);
    lwVm.safe_Objattribute(StorageManager, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(StorageManager.prototype, EventTarget.prototype);
    Object.setPrototypeOf(StorageManager, EventTarget);

})();

