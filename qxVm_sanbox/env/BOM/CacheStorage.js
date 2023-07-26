CacheStorage = function CacheStorage(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CacheStorage);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['delete', 'has', 'keys', 'match', 'open'];

    CacheStorage.prototype = {
        delete() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CacheStorage', 'delete', arguments, result);
            return result;
        },
        has() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CacheStorage', 'has', arguments, result);
            return result;
        },
        keys() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CacheStorage', 'keys', arguments, result);
            return result;
        },
        match() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CacheStorage', 'match', arguments, result);
            return result;
        },
        open() {
            if (!CacheStorage.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CacheStorage', 'open', arguments, result);
            return result;
        },
    }
    lwVm.rename(CacheStorage.prototype, "CacheStorage");
    lwVm.safeDescriptor_addConstructor(CacheStorage);
    lwVm.safe_Objattribute(CacheStorage, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
caches = new CacheStorage(lwVm.memory.$createObj_key);

