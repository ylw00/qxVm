RTCIceCandidate = function RTCIceCandidate(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(RTCIceCandidate);

; (function () {
    const $safe_get_attribute = ['address', 'candidate', 'component', 'foundation', 'port', 'priority', 'protocol', 'relatedAddress', 'relatedPort', 'sdpMLineIndex', 'sdpMid', 'tcpType', 'type', 'usernameFragment'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    RTCIceCandidate.prototype = {
        get address() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).address, "192.168.0.103");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'address', arguments, result);
            return result;
        },
        get candidate() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).candidate, "candidate:1840965416 1 udp 2122260223 192.168.0.103 49325 typ host generation 0 ufrag o6U2 network-id 1 network-cost 10");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'candidate', arguments, result);
            return result;
        },
        get component() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).component, "rtp");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'component', arguments, result);
            return result;
        },
        get foundation() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).foundation, "1840965416");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'foundation', arguments, result);
            return result;
        },
        get port() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).port, 49325);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'port', arguments, result);
            return result;
        },
        get priority() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).priority, 2122260223);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'priority', arguments, result);
            return result;
        },
        get protocol() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).protocol, "udp");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'protocol', arguments, result);
            return result;
        },
        get relatedAddress() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).relatedAddress, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'relatedAddress', arguments, result);
            return result;
        },
        get relatedPort() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).relatedPort, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'relatedPort', arguments, result);
            return result;
        },
        get sdpMLineIndex() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sdpMLineIndex, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'sdpMLineIndex', arguments, result);
            return result;
        },
        get sdpMid() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sdpMid, "1");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'sdpMid', arguments, result);
            return result;
        },
        get tcpType() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).tcpType, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'tcpType', arguments, result);
            return result;
        },
        toJSON() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCIceCandidate', 'toJSON', arguments, result);
            return result;
        },
        get type() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "host");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'type', arguments, result);
            return result;
        },
        get usernameFragment() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).usernameFragment, "o6U2");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCIceCandidate', 'usernameFragment', arguments, result);
            return result;
        },
    }
    lwVm.rename(RTCIceCandidate.prototype, "RTCIceCandidate");
    lwVm.safeDescriptor_addConstructor(RTCIceCandidate);
    lwVm.safe_Objattribute(RTCIceCandidate, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

