TrustedTypePolicyFactory = function TrustedTypePolicyFactory(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(TrustedTypePolicyFactory);

; (function () {
    const $safe_get_attribute = ['defaultPolicy', 'emptyHTML', 'emptyScript'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['createPolicy', 'getAttributeType', 'getPropertyType', 'getTypeMapping', 'isHTML', 'isScript', 'isScriptURL'];

    TrustedTypePolicyFactory.prototype = {
        createPolicy() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get defaultPolicy() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return null;
        },
        get emptyHTML() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).emptyHTML, "");
        },
        get emptyScript() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).emptyScript, "");
        },
        getAttributeType() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getPropertyType() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getTypeMapping() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isHTML() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isScript() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        isScriptURL() {
            debugger;
            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(TrustedTypePolicyFactory.prototype, "TrustedTypePolicyFactory");
    qxVm.safeDescriptor_addConstructor(TrustedTypePolicyFactory);
    qxVm.safe_Objattribute(TrustedTypePolicyFactory, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(TrustedTypePolicyFactory.prototype, EventTarget.prototype);
    Object.setPrototypeOf(TrustedTypePolicyFactory, EventTarget);
})();
trustedTypes = new TrustedTypePolicyFactory(qxVm.memory.$createObj_key)

