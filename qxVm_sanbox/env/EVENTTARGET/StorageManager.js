StorageManager = function StorageManager(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(StorageManager);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['estimate', 'getDirectory', 'persist', 'persisted'];

    StorageManager.prototype = {
        estimate() {
            debugger;
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getDirectory() {
            debugger;
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        persist() {
            debugger;
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        persisted() {
            debugger;
            if (!StorageManager.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(StorageManager.prototype, "StorageManager");
    qxVm.safeDescriptor_addConstructor(StorageManager);
    qxVm.safe_Objattribute(StorageManager, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(StorageManager.prototype, EventTarget.prototype);
    Object.setPrototypeOf(StorageManager, EventTarget);

})();

