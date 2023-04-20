
PerformanceEntry = function PerformanceEntry(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(PerformanceEntry);

; (function () {
    const $safe_get_attribute = ['duration', 'entryType', 'name', 'startTime'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];
    
    PerformanceEntry.prototype = {
        get duration() {
            debugger;
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).duration, "");
        },
        get entryType() {
            debugger;
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).entryType, "");
        },
        get name() {
            debugger;
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).name, "");
        },
        get startTime() {
            debugger;
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).startTime, "");
        },
        toJSON() {
            debugger;
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(PerformanceEntry.prototype, "PerformanceEntry");
    qxVm.safeDescriptor_addConstructor(PerformanceEntry);
    qxVm.safe_Objattribute(PerformanceEntry, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();