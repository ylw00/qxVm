PerformancePaintTiming = function PerformancePaintTiming(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    // lwVm.z_sanbox.memory.private_data.set(this, {})
}; lwVm.safefunction(PerformancePaintTiming);

; (function () {
    // const $safe_get_attribute = [];
    // const $safe_set_attribute = [];
    // const $safe_func_attribute = [];

    PerformancePaintTiming.prototype = {}

    lwVm.rename(PerformancePaintTiming.prototype, "PerformancePaintTiming");
    lwVm.safeDescriptor_addConstructor(PerformancePaintTiming);
    // lwVm.z_sanbox.safe_Objattribute(PerformancePaintTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PerformancePaintTiming.prototype, PerformanceEntry.prototype);
    Object.setPrototypeOf(PerformancePaintTiming, PerformanceEntry);

})();