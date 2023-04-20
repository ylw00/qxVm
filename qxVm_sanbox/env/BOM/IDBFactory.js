IDBFactory = function IDBFactory(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(IDBFactory);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['cmp', 'databases', 'deleteDatabase', 'open'];

    IDBFactory.prototype = {
        cmp(first, second) {
            debugger;
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        databases() {
            debugger;
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new Promise(function () { debugger })
        },
        deleteDatabase(name, options) {
            debugger;
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        open(name, version) {
            debugger;
            if (!IDBFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    }

    qxVm.rename(IDBFactory.prototype, "IDBFactory");
    qxVm.safeDescriptor_addConstructor(IDBFactory);
    qxVm.safe_Objattribute(IDBFactory, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
indexedDB = new IDBFactory(qxVm.memory.$createObj_key);

