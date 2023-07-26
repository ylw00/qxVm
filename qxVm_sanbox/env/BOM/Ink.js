Ink = function Ink(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Ink);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['requestPresenter'];
    
    Ink.prototype = {
        requestPresenter() {
            if (!Ink.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Ink', 'requestPresenter', arguments, result);
            return result;
        },
    }
    lwVm.rename(Ink.prototype, "Ink");
    lwVm.safeDescriptor_addConstructor(Ink);
    lwVm.safe_Objattribute(Ink, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

