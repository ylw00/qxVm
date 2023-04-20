PerformanceNavigation = function PerformanceNavigation(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(PerformanceNavigation);

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
            debugger;
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        toJSON() {
            debugger;
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            debugger;
            if (!PerformanceNavigation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
    }
    qxVm.rename(PerformanceNavigation.prototype, "PerformanceNavigation");
    qxVm.safeDescriptor_addConstructor(PerformanceNavigation);
    qxVm.safe_Objattribute(PerformanceNavigation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    qxVm.add_capitalLetter_attribute(PerformanceNavigation, $attributes);

})();