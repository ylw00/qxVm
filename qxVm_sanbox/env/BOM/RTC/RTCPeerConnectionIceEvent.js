RTCPeerConnectionIceEvent = function RTCPeerConnectionIceEvent(createObj_key, type) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, { type: type })
}; lwVm.safefunction(RTCPeerConnectionIceEvent);

; (function () {
    const $safe_get_attribute = ['candidate'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    RTCPeerConnectionIceEvent.prototype = {
        get candidate() {
            if (!RTCPeerConnectionIceEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).candidate, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCPeerConnectionIceEvent', 'candidate', arguments, result);
            return result;
        },
    }
    lwVm.rename(RTCPeerConnectionIceEvent.prototype, "RTCPeerConnectionIceEvent");
    lwVm.safeDescriptor_addConstructor(RTCPeerConnectionIceEvent);
    lwVm.safe_Objattribute(RTCPeerConnectionIceEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCPeerConnectionIceEvent.prototype, Event.prototype);
    Object.setPrototypeOf(RTCPeerConnectionIceEvent, Event);
})();

