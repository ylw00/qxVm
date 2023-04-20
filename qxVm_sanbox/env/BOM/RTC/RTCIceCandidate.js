RTCIceCandidate = function RTCIceCandidate(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(RTCIceCandidate);

; (function () {
    const $safe_get_attribute = ['address', 'candidate', 'component', 'foundation', 'port', 'priority', 'protocol', 'relatedAddress', 'relatedPort', 'sdpMLineIndex', 'sdpMid', 'tcpType', 'type', 'usernameFragment'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    RTCIceCandidate.prototype = {
        get address() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).address, "192.168.0.103");
        },
        get candidate() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).candidate, "candidate:1840965416 1 udp 2122260223 192.168.0.103 49325 typ host generation 0 ufrag o6U2 network-id 1 network-cost 10");
        },
        get component() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).component, "rtp");
        },
        get foundation() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).foundation, "1840965416");
        },
        get port() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).port, 49325);
        },
        get priority() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).priority, 2122260223);
        },
        get protocol() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).protocol, "udp");
        },
        get relatedAddress() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).relatedAddress, null);
        },
        get relatedPort() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).relatedPort, null);
        },
        get sdpMLineIndex() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sdpMLineIndex, 0);
        },
        get sdpMid() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sdpMid, "1");
        },
        get tcpType() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).tcpType, null);
        },
        toJSON() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "host");
        },
        get usernameFragment() {
            debugger;
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).usernameFragment, "o6U2");
        },
    }
    qxVm.rename(RTCIceCandidate.prototype, "RTCIceCandidate");
    qxVm.safeDescriptor_addConstructor(RTCIceCandidate);
    qxVm.safe_Objattribute(RTCIceCandidate, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

