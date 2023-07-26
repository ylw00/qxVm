Scheduling = function Scheduling(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Scheduling);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['isInputPending'];

    Scheduling.prototype = {
        isInputPending() {
            if (!Scheduling.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Scheduling', 'isInputPending', arguments, result);
            return result;
        }
    }
    lwVm.rename(Scheduling.prototype, "Scheduling");
    lwVm.safeDescriptor_addConstructor(Scheduling);
    lwVm.safe_Objattribute(Scheduling, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();