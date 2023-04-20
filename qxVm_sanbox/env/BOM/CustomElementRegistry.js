CustomElementRegistry = function CustomElementRegistry(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CustomElementRegistry);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['define', 'get', 'upgrade', 'whenDefined'];
    
    CustomElementRegistry.prototype = {
        define() {
            debugger;
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get() {
            debugger;
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        upgrade() {
            debugger;
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        whenDefined() {
            debugger;
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(CustomElementRegistry.prototype, "CustomElementRegistry");
    qxVm.safeDescriptor_addConstructor(CustomElementRegistry);
    qxVm.safe_Objattribute(CustomElementRegistry, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
customElements = new CustomElementRegistry(qxVm.memory.$createObj_key)

