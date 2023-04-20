Bluetooth = function Bluetooth(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Bluetooth);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getAvailability', 'requestDevice'];

    Bluetooth.prototype = {
        getAvailability() {
            debugger;
            if (!Bluetooth.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        requestDevice() {
            debugger;
            if (!Bluetooth.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Bluetooth.prototype, "Bluetooth");
    qxVm.safeDescriptor_addConstructor(Bluetooth);
    qxVm.safe_Objattribute(Bluetooth, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Bluetooth.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Bluetooth, EventTarget);

})();