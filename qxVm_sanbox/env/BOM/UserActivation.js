UserActivation = function UserActivation(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(UserActivation);

; (function () {
    const $safe_get_attribute = ['hasBeenActive', 'isActive'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    UserActivation.prototype = {
        get hasBeenActive() {
            debugger;
            if (!UserActivation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
        get isActive() {
            debugger;
            if (!UserActivation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return false;
        }
    }
    qxVm.rename(UserActivation.prototype, "UserActivation");
    qxVm.safeDescriptor_addConstructor(UserActivation);
    qxVm.safe_Objattribute(UserActivation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

