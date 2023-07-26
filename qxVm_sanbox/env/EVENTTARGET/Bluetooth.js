Bluetooth = function Bluetooth(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Bluetooth);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getAvailability', 'requestDevice'];

    Bluetooth.prototype = {
        getAvailability() {
            if (!Bluetooth.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Bluetooth', 'getAvailability', arguments, result);
            return result;
        },
        requestDevice() {
            if (!Bluetooth.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Bluetooth', 'requestDevice', arguments, result);
            return result;
        },
    }
    lwVm.rename(Bluetooth.prototype, "Bluetooth");
    lwVm.safeDescriptor_addConstructor(Bluetooth);
    lwVm.safe_Objattribute(Bluetooth, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Bluetooth.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Bluetooth, EventTarget);

})();