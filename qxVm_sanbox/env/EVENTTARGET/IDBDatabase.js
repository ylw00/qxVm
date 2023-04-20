IDBDatabase = function IDBDatabase(createObj_key, name, version) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {
        name: name,
        version: version || 1
    })
}; qxVm.safefunction(IDBDatabase);

; (function () {
    const $safe_get_attribute = ['name', 'objectStoreNames', 'onabort', 'onclose', 'onerror', 'onversionchange', 'version'];
    const $safe_set_attribute = ['onabort', 'onclose', 'onerror', 'onversionchange'];
    const $safe_func_attribute = ['close', 'createObjectStore', 'deleteObjectStore', 'transaction'];

    IDBDatabase.prototype = {
        close() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createObjectStore() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        deleteObjectStore() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get name() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).name;
        },
        get objectStoreNames() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).objectStoreNames, "");
        },
        get onabort() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onabort, null);
        },
        set onabort(value) {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onabort = value;
        },
        get onclose() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onclose);
        },
        set onclose(value) {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onclose = value;
        },
        get onerror() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value) {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value;
        },
        get onversionchange() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onversionchange, null);
        },
        set onversionchange(value) {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onversionchange = value;
        },
        transaction() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get version() {
            debugger;
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).version;
        }
    }
    qxVm.rename(IDBDatabase.prototype, "IDBDatabase");
    qxVm.safeDescriptor_addConstructor(IDBDatabase);
    qxVm.safe_Objattribute(IDBDatabase, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(IDBDatabase.prototype, EventTarget.prototype);
    Object.setPrototypeOf(IDBDatabase, EventTarget);
})();

