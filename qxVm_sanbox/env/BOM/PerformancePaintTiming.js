PerformancePaintTiming = function PerformancePaintTiming(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    // qxVm.z_sanbox.memory.private_data.set(this, {})
}; qxVm.safefunction(PerformancePaintTiming);

; (function () {
    // const $safe_get_attribute = [];
    // const $safe_set_attribute = [];
    // const $safe_func_attribute = [];

    PerformancePaintTiming.prototype = {}

    qxVm.rename(PerformancePaintTiming.prototype, "PerformancePaintTiming");
    qxVm.safeDescriptor_addConstructor(PerformancePaintTiming);
    // qxVm.z_sanbox.safe_Objattribute(PerformancePaintTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PerformancePaintTiming.prototype, PerformanceEntry.prototype);
    Object.setPrototypeOf(PerformancePaintTiming, PerformanceEntry);

})();