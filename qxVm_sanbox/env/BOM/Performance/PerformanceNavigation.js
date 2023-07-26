PerformanceNavigation = function PerformanceNavigation(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(PerformanceNavigation);

; (function () {
    const $attributes = {
        TYPE_BACK_FORWARD: 2,
        TYPE_NAVIGATE: 0,
        TYPE_RELOAD: 1,
        TYPE_RESERVED: 255
    }
    const $safe_get_attribute = ['redirectCount', 'type'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    PerformanceNavigation.prototype = {
        get redirectCount() {
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceNavigation', 'redirectCount', arguments, result);
            return result;
        },
        toJSON() {
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PerformanceNavigation', 'toJSON', arguments, result);
            return result;
        },
        get type() {
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PerformanceNavigation', 'type', arguments, result);
            return result;
        },
    }
    lwVm.rename(PerformanceNavigation.prototype, "PerformanceNavigation");
    lwVm.safeDescriptor_addConstructor(PerformanceNavigation);
    lwVm.safe_Objattribute(PerformanceNavigation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    lwVm.add_capitalLetter_attribute(PerformanceNavigation, $attributes);

})();