Serial = function Serial(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Serial);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getPorts', 'requestPort'];

    Serial.prototype = {
        getPorts() {
            debugger;
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onconnect() {
            debugger;
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onconnect, null);
        },
        set onconnect(value) {
            debugger;
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            debugger;
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ondisconnect, null);
        },
        set ondisconnect(value) {
            debugger;
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestPort() {
            debugger;
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Serial.prototype, "Serial");
    qxVm.safeDescriptor_addConstructor(Serial);
    qxVm.safe_Objattribute(Serial, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Serial.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Serial, EventTarget);

})();
