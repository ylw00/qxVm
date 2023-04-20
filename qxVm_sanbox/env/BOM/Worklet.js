Worklet = function Worklet(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Worklet);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addModule'];

    Worklet.prototype = {
        addModule() {
            debugger;
            if (!Worklet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    }
    qxVm.rename(Worklet.prototype, "Worklet");
    qxVm.safeDescriptor_addConstructor(Worklet);
    qxVm.safe_Objattribute(Worklet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

