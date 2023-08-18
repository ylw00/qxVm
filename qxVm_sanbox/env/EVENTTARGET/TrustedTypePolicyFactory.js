TrustedTypePolicyFactory = function TrustedTypePolicyFactory(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(TrustedTypePolicyFactory);

; (function () {
    const $safe_get_attribute = ['defaultPolicy', 'emptyHTML', 'emptyScript'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['createPolicy', 'getAttributeType', 'getPropertyType', 'getTypeMapping', 'isHTML', 'isScript', 'isScriptURL'];

    TrustedTypePolicyFactory.prototype = {
        createPolicy() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'createPolicy', arguments, result);
            return result;
        },
        get defaultPolicy() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = null;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'TrustedTypePolicyFactory', 'defaultPolicy', arguments, result);
            return result;
        },
        get emptyHTML() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).emptyHTML, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'TrustedTypePolicyFactory', 'emptyHTML', arguments, result);
            return result;
        },
        get emptyScript() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).emptyScript, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'TrustedTypePolicyFactory', 'emptyScript', arguments, result);
            return result;
        },
        getAttributeType() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'getAttributeType', arguments, result);
            return result;
        },
        getPropertyType() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'getPropertyType', arguments, result);
            return result;
        },
        getTypeMapping() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'getTypeMapping', arguments, result);
            return result;
        },
        isHTML() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'isHTML', arguments, result);
            return result;
        },
        isScript() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'isScript', arguments, result);
            return result;
        },
        isScriptURL() {
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'TrustedTypePolicyFactory', 'isScriptURL', arguments, result);
            return result;
        },
    }
    lwVm.rename(TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory");
    lwVm.safeDescriptor_addConstructor(TrustedTypePolicyFactory);
    lwVm.safe_Objattribute(TrustedTypePolicyFactory, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(TrustedTypePolicyFactory.prototype, EventTarget.prototype);
    Object.setPrototypeOf(TrustedTypePolicyFactory, EventTarget);
})();
trustedTypes = new TrustedTypePolicyFactory(lwVm.memory.$createObj_key)

