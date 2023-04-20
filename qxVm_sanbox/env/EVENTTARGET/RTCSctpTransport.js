RTCSctpTransport = function RTCSctpTransport(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(RTCSctpTransport);

; (function () {
    const $safe_get_attribute = ['maxChannels', 'maxMessageSize', 'onstatechange', 'state', 'transport'];
    const $safe_set_attribute = ['onstatechange'];
    const $safe_func_attribute = [];

    RTCSctpTransport.prototype = {
        get maxChannels() {
            debugger;
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).maxChannels, "");
        },
        get maxMessageSize() {
            debugger;
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).maxMessageSize, "");
        },
        get onstatechange() {
            debugger;
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstatechange, "");
        },
        set onstatechange(value) {
            debugger;
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstatechange = value + "";
        },
        get state() {
            debugger;
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).state, "");
        },
        get transport() {
            debugger;
            if (!RTCSctpTransport.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).transport, "");
        },
    }
    qxVm.rename(RTCSctpTransport.prototype, "RTCSctpTransport");
    qxVm.safeDescriptor_addConstructor(RTCSctpTransport);
    qxVm.safe_Objattribute(RTCSctpTransport, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCSctpTransport.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCSctpTransport, EventTarget);

})();