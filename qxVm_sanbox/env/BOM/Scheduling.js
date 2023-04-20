Scheduling = function Scheduling(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Scheduling);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['isInputPending'];

    Scheduling.prototype = {
        isInputPending() {
            debugger;
            if (!Scheduling.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    }
    qxVm.rename(Scheduling.prototype, "Scheduling");
    qxVm.safeDescriptor_addConstructor(Scheduling);
    qxVm.safe_Objattribute(Scheduling, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();