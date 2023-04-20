CredentialsContainer = function CredentialsContainer(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CredentialsContainer);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['create', 'get', 'preventSilentAccess', 'store'];

    CredentialsContainer.prototype = {
        create() {
            debugger;
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get() {
            debugger;
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        preventSilentAccess() {
            debugger;
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        store() {
            debugger;
            if (!CredentialsContainer.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(CredentialsContainer.prototype, "CredentialsContainer");
    qxVm.safeDescriptor_addConstructor(CredentialsContainer);
    qxVm.safe_Objattribute(CredentialsContainer, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();