CacheStorage = function CacheStorage(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CacheStorage);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['delete', 'has', 'keys', 'match', 'open'];

    CacheStorage.prototype = {
        delete() {
            debugger;
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        has() {
            debugger;
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        keys() {
            debugger;
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        match() {
            debugger;
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        open() {
            debugger;
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(CacheStorage.prototype, "CacheStorage");
    qxVm.safeDescriptor_addConstructor(CacheStorage);
    qxVm.safe_Objattribute(CacheStorage, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
caches = new CacheStorage(qxVm.memory.$createObj_key);

