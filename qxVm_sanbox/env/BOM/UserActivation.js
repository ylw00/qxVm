UserActivation = function UserActivation(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(UserActivation);

; (function () {
    const $safe_get_attribute = ['hasBeenActive', 'isActive'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    UserActivation.prototype = {
        get hasBeenActive() {
            if (!UserActivation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'UserActivation', 'hasBeenActive', arguments, result);
            return result;
        },
        get isActive() {
            if (!UserActivation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return false;
        }
    }
    lwVm.rename(UserActivation.prototype, "UserActivation");
    lwVm.safeDescriptor_addConstructor(UserActivation);
    lwVm.safe_Objattribute(UserActivation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

