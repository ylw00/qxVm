IDBDatabase = function IDBDatabase(createObj_key, name, version) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {
        name: name,
        version: version || 1
    })
}; lwVm.safefunction(IDBDatabase);

; (function () {
    const $safe_get_attribute = ['name', 'objectStoreNames', 'onabort', 'onclose', 'onerror', 'onversionchange', 'version'];
    const $safe_set_attribute = ['onabort', 'onclose', 'onerror', 'onversionchange'];
    const $safe_func_attribute = ['close', 'createObjectStore', 'deleteObjectStore', 'transaction'];

    IDBDatabase.prototype = {
        close() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBDatabase', 'close', arguments, result);
            return result;
        },
        createObjectStore() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBDatabase', 'createObjectStore', arguments, result);
            return result;
        },
        deleteObjectStore() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBDatabase', 'deleteObjectStore', arguments, result);
            return result;
        },
        get name() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).name;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBDatabase', 'name', arguments, result);
            return result;
        },
        get objectStoreNames() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).objectStoreNames, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBDatabase', 'objectStoreNames', arguments, result);
            return result;
        },
        get onabort() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onabort, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBDatabase', 'onabort', arguments, result);
            return result;
        },
        set onabort(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBDatabase', 'onabort', arguments);
            lwVm.memory.private_data.get(this).onabort = value;
        },
        get onclose() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onclose);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBDatabase', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBDatabase', 'onclose', arguments);
            lwVm.memory.private_data.get(this).onclose = value;
        },
        get onerror() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBDatabase', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBDatabase', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value;
        },
        get onversionchange() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onversionchange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBDatabase', 'onversionchange', arguments, result);
            return result;
        },
        set onversionchange(value) {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBDatabase', 'onversionchange', arguments);
            lwVm.memory.private_data.get(this).onversionchange = value;
        },
        transaction() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'IDBDatabase', 'transaction', arguments, result);
            return result;
        },
        get version() {
            if (!IDBDatabase.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.memory.private_data.get(this).version;
        }
    }
    lwVm.rename(IDBDatabase.prototype, "IDBDatabase");
    lwVm.safeDescriptor_addConstructor(IDBDatabase);
    lwVm.safe_Objattribute(IDBDatabase, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(IDBDatabase.prototype, EventTarget.prototype);
    Object.setPrototypeOf(IDBDatabase, EventTarget);
})();

