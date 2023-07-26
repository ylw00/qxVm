Worklet = function Worklet(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Worklet);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['addModule'];

    Worklet.prototype = {
        addModule() {
            if (!Worklet.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Worklet', 'addModule', arguments, result);
            return result;
        }
    }
    lwVm.rename(Worklet.prototype, "Worklet");
    lwVm.safeDescriptor_addConstructor(Worklet);
    lwVm.safe_Objattribute(Worklet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

