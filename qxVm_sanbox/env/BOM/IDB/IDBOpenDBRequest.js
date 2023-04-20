IDBOpenDBRequest = function IDBOpenDBRequest(createObj_key, name, version) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {
        name:name,
        version:version || 0
    })
}; qxVm.safefunction(IDBOpenDBRequest);

; (function () {
    const $safe_get_attribute = ['onblocked', 'onupgradeneeded'];
    const $safe_set_attribute = ['onblocked', 'onupgradeneeded'];
    const $safe_func_attribute = [];

    IDBOpenDBRequest.prototype = {
        get onblocked() {
            debugger;
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onblocked, "");
        },
        set onblocked(value) {
            debugger;
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onblocked = value + "";
        },
        get onupgradeneeded() {
            debugger;
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onupgradeneeded, "");
        },
        set onupgradeneeded(value) {
            debugger;
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onupgradeneeded = value;
        },
    }
    qxVm.rename(IDBOpenDBRequest.prototype, "IDBOpenDBRequest");
    qxVm.safeDescriptor_addConstructor(IDBOpenDBRequest);
    qxVm.safe_Objattribute(IDBOpenDBRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    
    Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
    Object.setPrototypeOf(IDBOpenDBRequest, IDBRequest);
})();