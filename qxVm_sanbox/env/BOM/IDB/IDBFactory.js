IDBFactory = function IDBFactory(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {
        name: undefined,
        version: undefined
    })
}; lwVm.safefunction(IDBFactory);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['cmp', 'databases', 'deleteDatabase', 'open'];

    IDBFactory.prototype = {
        cmp(first, second) {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBFactory', 'cmp', arguments, result);
            return result;
        },
        databases() {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise(function () { debugger });
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBFactory', 'databases', arguments, result);
            return result;
        },
        deleteDatabase(name, options) {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBFactory', 'deleteDatabase', arguments, result);
            return result;
        },
        open(name, version) {
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (!name){ throw new TypeError("Failed to execute 'open' on 'IDBFactory': 1 argument required, but only 0 present.") };

            lwVm.memory.private_data.set(this, {
                name: name,
                version: version || 1
            })
            let result = new IDBOpenDBRequest(lwVm.memory.$createObj_key, name, version);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBFactory', 'open', arguments, result);
            return result;
        }
    }

    lwVm.rename(IDBFactory.prototype, "IDBFactory");
    lwVm.safeDescriptor_addConstructor(IDBFactory);
    lwVm.safe_Objattribute(IDBFactory, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
indexedDB = new IDBFactory(lwVm.memory.$createObj_key);

