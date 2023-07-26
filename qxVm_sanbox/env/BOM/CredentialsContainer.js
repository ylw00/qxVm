CredentialsContainer = function CredentialsContainer(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CredentialsContainer);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['create', 'get', 'preventSilentAccess', 'store'];

    CredentialsContainer.prototype = {
        create() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CredentialsContainer', 'create', arguments, result);
            return result;
        },
        get() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CredentialsContainer', 'get', arguments, result);
            return result;
        },
        preventSilentAccess() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CredentialsContainer', 'preventSilentAccess', arguments, result);
            return result;
        },
        store() {
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CredentialsContainer', 'store', arguments, result);
            return result;
        },
    }
    lwVm.rename(CredentialsContainer.prototype, "CredentialsContainer");
    lwVm.safeDescriptor_addConstructor(CredentialsContainer);
    lwVm.safe_Objattribute(CredentialsContainer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();