IDBRequest = function IDBRequest(createObj_key, name, version) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {
        name:name,
        version: version || 1
    })
}; qxVm.safefunction(IDBRequest);

; (function () {
    const $safe_get_attribute = ['error', 'onerror', 'onsuccess', 'readyState', 'result', 'source', 'transaction'];
    const $safe_set_attribute = ['onerror', 'onsuccess'];
    const $safe_func_attribute = [];
    
    IDBRequest.prototype = {
        get error() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).error, null);
        },
        get onerror() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value) {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value;
        },
        get onsuccess() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onsuccess, null);
        },
        set onsuccess(value) {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onsuccess = value;
        },
        get readyState() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).readyState, "done");
        },
        get result() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let info = qxVm.memory.private_data.get(this);
            let name = info.name, version = info.version;

            return new IDBDatabase(qxVm.memory.$createObj_key, name, version);
        },
        get source() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).source, null);
        },
        get transaction() {
            debugger;
            if (!IDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).transaction, null);
        }
    }
    qxVm.rename(IDBRequest.prototype, "IDBRequest");
    qxVm.safeDescriptor_addConstructor(IDBRequest);
    qxVm.safe_Objattribute(IDBRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);
    Object.setPrototypeOf(IDBRequest, EventTarget);
})();

