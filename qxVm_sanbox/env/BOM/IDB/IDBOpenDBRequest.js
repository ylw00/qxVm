IDBOpenDBRequest = function IDBOpenDBRequest(createObj_key, name, version) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {
        name:name,
        version:version || 0
    })
}; lwVm.safefunction(IDBOpenDBRequest);

; (function () {
    const $safe_get_attribute = ['onblocked', 'onupgradeneeded'];
    const $safe_set_attribute = ['onblocked', 'onupgradeneeded'];
    const $safe_func_attribute = [];

    IDBOpenDBRequest.prototype = {
        get onblocked() {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onblocked, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBOpenDBRequest', 'onblocked', arguments, result);
            return result;
        },
        set onblocked(value) {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBOpenDBRequest', 'onblocked', arguments);
            lwVm.memory.private_data.get(this).onblocked = value + "";
        },
        get onupgradeneeded() {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onupgradeneeded, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'IDBOpenDBRequest', 'onupgradeneeded', arguments, result);
            return result;
        },
        set onupgradeneeded(value) {
            if (!IDBOpenDBRequest.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'IDBOpenDBRequest', 'onupgradeneeded', arguments);
            lwVm.memory.private_data.get(this).onupgradeneeded = value;
        },
    }
    lwVm.rename(IDBOpenDBRequest.prototype, "IDBOpenDBRequest");
    lwVm.safeDescriptor_addConstructor(IDBOpenDBRequest);
    lwVm.safe_Objattribute(IDBOpenDBRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    
    Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);
    Object.setPrototypeOf(IDBOpenDBRequest, IDBRequest);
})();