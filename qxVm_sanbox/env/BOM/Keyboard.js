Keyboard = function Keyboard(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Keyboard);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getLayoutMap', 'lock', 'unlock'];

    Keyboard.prototype = {
        getLayoutMap() {
            debugger;
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        lock() {
            debugger;
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        unlock() {
            debugger;
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Keyboard.prototype, "Keyboard");
    qxVm.safeDescriptor_addConstructor(Keyboard);
    qxVm.safe_Objattribute(Keyboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

