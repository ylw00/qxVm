Keyboard = function Keyboard(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Keyboard);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getLayoutMap', 'lock', 'unlock'];

    Keyboard.prototype = {
        getLayoutMap() {
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Keyboard', 'getLayoutMap', arguments, result);
            return result;
        },
        lock() {
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Keyboard', 'lock', arguments, result);
            return result;
        },
        unlock() {
            if (!Keyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Keyboard', 'unlock', arguments, result);
            return result;
        },
    }
    lwVm.rename(Keyboard.prototype, "Keyboard");
    lwVm.safeDescriptor_addConstructor(Keyboard);
    lwVm.safe_Objattribute(Keyboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

