IDBRequest = function IDBRequest(createObj_key, name, version) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {
        name:name,
        version: version || 1
    })
}; lwVm.safefunction(IDBRequest);

; (function () {
    const $safe_get_attribute = ['error', 'onerror', 'onsuccess', 'readyState', 'result', 'source', 'transaction'];
    const $safe_set_attribute = ['onerror', 'onsuccess'];
    const $safe_func_attribute = [];
    
    IDBRequest.prototype = {
        get error() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).error, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBRequest', 'error', arguments, result);
            return result;
        },
        get onerror() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBRequest', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBRequest', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value;
        },
        get onsuccess() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onsuccess, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBRequest', 'onsuccess', arguments, result);
            return result;
        },
        set onsuccess(value) {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBRequest', 'onsuccess', arguments);
            lwVm.memory.private_data.get(this).onsuccess = value;
        },
        get readyState() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).readyState, "done");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBRequest', 'readyState', arguments, result);
            return result;
        },
        get result() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let info = lwVm.memory.private_data.get(this);
            let name = info.name, version = info.version;

            let result = new IDBDatabase(lwVm.memory.$createObj_key, name, version);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBRequest', 'result', arguments, result);
            return result;
        },
        get source() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).source, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBRequest', 'source', arguments, result);
            return result;
        },
        get transaction() {
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).transaction, null);
        }
    }
    lwVm.rename(IDBRequest.prototype, "IDBRequest");
    lwVm.safeDescriptor_addConstructor(IDBRequest);
    lwVm.safe_Objattribute(IDBRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);
    Object.setPrototypeOf(IDBRequest, EventTarget);
})();

