CustomElementRegistry = function CustomElementRegistry(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CustomElementRegistry);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['define', 'get', 'upgrade', 'whenDefined'];
    
    CustomElementRegistry.prototype = {
        define() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CustomElementRegistry', 'define', arguments, result);
            return result;
        },
        get() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CustomElementRegistry', 'get', arguments, result);
            return result;
        },
        upgrade() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CustomElementRegistry', 'upgrade', arguments, result);
            return result;
        },
        whenDefined() {
            if (!CustomElementRegistry.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CustomElementRegistry', 'whenDefined', arguments, result);
            return result;
        },
    }
    lwVm.rename(CustomElementRegistry.prototype, "CustomElementRegistry");
    lwVm.safeDescriptor_addConstructor(CustomElementRegistry);
    lwVm.safe_Objattribute(CustomElementRegistry, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
customElements = new CustomElementRegistry(lwVm.memory.$createObj_key)

