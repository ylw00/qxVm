Serial = function Serial(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Serial);

; (function () {
    const $safe_get_attribute = ['onconnect', 'ondisconnect'];
    const $safe_set_attribute = ['onconnect', 'ondisconnect'];
    const $safe_func_attribute = ['getPorts', 'requestPort'];

    Serial.prototype = {
        getPorts() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Serial', 'getPorts', arguments, result);
            return result;
        },
        get onconnect() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onconnect, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Serial', 'onconnect', arguments, result);
            return result;
        },
        set onconnect(value) {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Serial', 'onconnect', arguments);
            lwVm.memory.private_data.get(this).onconnect = value + "";
        },
        get ondisconnect() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ondisconnect, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Serial', 'ondisconnect', arguments, result);
            return result;
        },
        set ondisconnect(value) {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Serial', 'ondisconnect', arguments);
            lwVm.memory.private_data.get(this).ondisconnect = value + "";
        },
        requestPort() {
            if (!Serial.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Serial', 'requestPort', arguments, result);
            return result;
        },
    }
    lwVm.rename(Serial.prototype, "Serial");
    lwVm.safeDescriptor_addConstructor(Serial);
    lwVm.safe_Objattribute(Serial, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Serial.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Serial, EventTarget);

})();
