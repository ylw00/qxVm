RTCSessionDescription = function RTCSessionDescription(createObj_key, sdp, type) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, { sdp: sdp, type: type })
}; qxVm.safefunction(RTCSessionDescription);

; (function () {
    const $safe_get_attribute = ['sdp', 'type'];
    const $safe_set_attribute = ['sdp', 'type'];
    const $safe_func_attribute = ['toJSON'];

    RTCSessionDescription.prototype = {
        get sdp() {
            debugger;
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sdp, "");
        },
        set sdp(value) {
            debugger;
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).sdp = value + "";
        },
        toJSON() {
            debugger;
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            debugger;
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, null);
        },
        set type(value) {
            debugger;
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        },
    };

    qxVm.rename(RTCSessionDescription.prototype, "RTCSessionDescription");
    qxVm.safeDescriptor_addConstructor(RTCSessionDescription);
    qxVm.safe_Objattribute(RTCSessionDescription, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

