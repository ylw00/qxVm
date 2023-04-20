Ink = function Ink(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Ink);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['requestPresenter'];
    
    Ink.prototype = {
        requestPresenter() {
            debugger;
            if (!Ink.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Ink.prototype, "Ink");
    qxVm.safeDescriptor_addConstructor(Ink);
    qxVm.safe_Objattribute(Ink, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

