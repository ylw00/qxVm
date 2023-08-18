
PerformanceEntry = function PerformanceEntry(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(PerformanceEntry);

; (function () {
    const $safe_get_attribute = ['duration', 'entryType', 'name', 'startTime'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];
    
    PerformanceEntry.prototype = {
        get duration() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).duration, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceEntry', 'duration', arguments, result);
            return result;
        },
        get entryType() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).entryType, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceEntry', 'entryType', arguments, result);
            return result;
        },
        get name() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).name, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceEntry', 'name', arguments, result);
            return result;
        },
        get startTime() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).startTime, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceEntry', 'startTime', arguments, result);
            return result;
        },
        toJSON() {
            if (!PerformanceEntry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PerformanceEntry', 'toJSON', arguments, result);
            return result;
        },
    }
    lwVm.rename(PerformanceEntry.prototype, "PerformanceEntry");
    lwVm.safeDescriptor_addConstructor(PerformanceEntry);
    lwVm.safe_Objattribute(PerformanceEntry, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();