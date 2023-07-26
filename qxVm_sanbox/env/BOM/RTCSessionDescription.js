RTCSessionDescription = function RTCSessionDescription(createObj_key, sdp, type) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, { sdp: sdp, type: type })
}; lwVm.safefunction(RTCSessionDescription);

; (function () {
    const $safe_get_attribute = ['sdp', 'type'];
    const $safe_set_attribute = ['sdp', 'type'];
    const $safe_func_attribute = ['toJSON'];

    RTCSessionDescription.prototype = {
        get sdp() {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sdp, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSessionDescription', 'sdp', arguments, result);
            return result;
        },
        set sdp(value) {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCSessionDescription', 'sdp', arguments);
            lwVm.memory.private_data.get(this).sdp = value + "";
        },
        toJSON() {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCSessionDescription', 'toJSON', arguments, result);
            return result;
        },
        get type() {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCSessionDescription', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!RTCSessionDescription.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCSessionDescription', 'type', arguments);
            lwVm.memory.private_data.get(this).type = value + "";
        },
    };

    lwVm.rename(RTCSessionDescription.prototype, "RTCSessionDescription");
    lwVm.safeDescriptor_addConstructor(RTCSessionDescription);
    lwVm.safe_Objattribute(RTCSessionDescription, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

