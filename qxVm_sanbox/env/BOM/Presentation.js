Presentation = function Presentation(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Presentation);

; (function () {
    const $safe_get_attribute = ['defaultRequest', 'receiver'];
    const $safe_set_attribute = ['defaultRequest'];
    const $safe_func_attribute = [];

    Presentation.prototype = {
        get defaultRequest() {
            debugger;
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultRequest, null);
        },
        set defaultRequest(value) {
            debugger;
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).defaultRequest = value + "";
        },
        get receiver() {
            debugger;
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
    }
    qxVm.rename(Presentation.prototype, "Presentation");
    qxVm.safeDescriptor_addConstructor(Presentation);
    qxVm.safe_Objattribute(Presentation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();