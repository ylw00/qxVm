RTCSctpTransport = function RTCSctpTransport(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(RTCSctpTransport);

; (function () {
    const $safe_get_attribute = ['maxChannels', 'maxMessageSize', 'onstatechange', 'state', 'transport'];
    const $safe_set_attribute = ['onstatechange'];
    const $safe_func_attribute = [];

    RTCSctpTransport.prototype = {
        get maxChannels() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).maxChannels, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSctpTransport', 'maxChannels', arguments, result);
            return result;
        },
        get maxMessageSize() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).maxMessageSize, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSctpTransport', 'maxMessageSize', arguments, result);
            return result;
        },
        get onstatechange() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onstatechange, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSctpTransport', 'onstatechange', arguments, result);
            return result;
        },
        set onstatechange(value) {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCSctpTransport', 'onstatechange', arguments);
            lwVm.memory.private_data.get(this).onstatechange = value + "";
        },
        get state() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).state, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSctpTransport', 'state', arguments, result);
            return result;
        },
        get transport() {
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).transport, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSctpTransport', 'transport', arguments, result);
            return result;
        },
    }
    lwVm.rename(RTCSctpTransport.prototype, "RTCSctpTransport");
    lwVm.safeDescriptor_addConstructor(RTCSctpTransport);
    lwVm.safe_Objattribute(RTCSctpTransport, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCSctpTransport.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCSctpTransport, EventTarget);

})();