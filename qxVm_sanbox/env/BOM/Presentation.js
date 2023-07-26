Presentation = function Presentation(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Presentation);

; (function () {
    const $safe_get_attribute = ['defaultRequest', 'receiver'];
    const $safe_set_attribute = ['defaultRequest'];
    const $safe_func_attribute = [];

    Presentation.prototype = {
        get defaultRequest() {
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).defaultRequest, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Presentation', 'defaultRequest', arguments, result);
            return result;
        },
        set defaultRequest(value) {
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Presentation', 'defaultRequest', arguments);
            lwVm.memory.private_data.get(this).defaultRequest = value + "";
        },
        get receiver() {
            if (!Presentation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Presentation', 'receiver', arguments, result);
            return result;
        },
    }
    lwVm.rename(Presentation.prototype, "Presentation");
    lwVm.safeDescriptor_addConstructor(Presentation);
    lwVm.safe_Objattribute(Presentation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();