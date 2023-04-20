RTCPeerConnectionIceEvent = function RTCPeerConnectionIceEvent(createObj_key, type) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, { type: type })
}; qxVm.safefunction(RTCPeerConnectionIceEvent);

; (function () {
    const $safe_get_attribute = ['candidate'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    RTCPeerConnectionIceEvent.prototype = {
        get candidate() {
            debugger;
            if (!RTCPeerConnectionIceEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).candidate, null);
        },
    }
    qxVm.rename(RTCPeerConnectionIceEvent.prototype, "RTCPeerConnectionIceEvent");
    qxVm.safeDescriptor_addConstructor(RTCPeerConnectionIceEvent);
    qxVm.safe_Objattribute(RTCPeerConnectionIceEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCPeerConnectionIceEvent.prototype, Event.prototype);
    Object.setPrototypeOf(RTCPeerConnectionIceEvent, Event);
})();

