RTCDataChannel = function RTCDataChannel(createObj_key, label) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {label:label})
}; lwVm.safefunction(RTCDataChannel);

; (function () {
    const $safe_get_attribute = ['binaryType', 'bufferedAmount', 'bufferedAmountLowThreshold', 'id', 'label', 'maxRetransmitTime', 'maxRetransmits', 'negotiated', 'onbufferedamountlow', 'onclose', 'onerror', 'onmessage', 'onopen', 'ordered', 'protocol', 'readyState', 'reliable'];
    const $safe_set_attribute = ['binaryType', 'bufferedAmount', 'bufferedAmountLowThreshold', 'onbufferedamountlow', 'onclose', 'onerror', 'onmessage', 'onopen'];
    const $safe_func_attribute = ['close', 'send'];
    RTCDataChannel.prototype = {

        get binaryType() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).binaryType, "arraybuffer");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'binaryType', arguments, result);
            return result;
        },
        set binaryType(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'binaryType', arguments);
            lwVm.memory.private_data.get(this).binaryType = value + "";
        },
        get bufferedAmount() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).bufferedAmount, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'bufferedAmount', arguments, result);
            return result;
        },
        set bufferedAmount(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'bufferedAmount', arguments);
            lwVm.memory.private_data.get(this).bufferedAmount = value;
        },
        get bufferedAmountLowThreshold() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).bufferedAmountLowThreshold, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'bufferedAmountLowThreshold', arguments, result);
            return result;
        },
        set bufferedAmountLowThreshold(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'bufferedAmountLowThreshold', arguments);
            lwVm.memory.private_data.get(this).bufferedAmountLowThreshold = value;
        },
        close() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCDataChannel', 'close', arguments, result);
            return result;
        },
        get id() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).id, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'id', arguments, result);
            return result;
        },
        get label() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).label;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'label', arguments, result);
            return result;
        },
        get maxRetransmitTime() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).maxRetransmitTime, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'maxRetransmitTime', arguments, result);
            return result;
        },
        get maxRetransmits() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).maxRetransmits, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'maxRetransmits', arguments, result);
            return result;
        },
        get negotiated() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).negotiated, false);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'negotiated', arguments, result);
            return result;
        },
        get onbufferedamountlow() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onbufferedamountlow, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'onbufferedamountlow', arguments, result);
            return result;
        },
        set onbufferedamountlow(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'onbufferedamountlow', arguments);
            lwVm.memory.private_data.get(this).onbufferedamountlow = value + "";
        },
        get onclose() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onclose, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'onclose', arguments, result);
            return result;
        },
        set onclose(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'onclose', arguments);
            lwVm.memory.private_data.get(this).onclose = value + "";
        },
        get onerror() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onerror, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'onerror', arguments, result);
            return result;
        },
        set onerror(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'onerror', arguments);
            lwVm.memory.private_data.get(this).onerror = value + "";
        },
        get onmessage() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onmessage, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'onmessage', arguments, result);
            return result;
        },
        set onmessage(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'onmessage', arguments);
            lwVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onopen() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onopen, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'onopen', arguments, result);
            return result;
        },
        set onopen(value) {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'RTCDataChannel', 'onopen', arguments);
            lwVm.memory.private_data.get(this).onopen = value + "";
        },
        get ordered() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ordered, true);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'ordered', arguments, result);
            return result;
        },
        get protocol() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).protocol, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'protocol', arguments, result);
            return result;
        },
        get readyState() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).readyState, "connecting");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'readyState', arguments, result);
            return result;
        },
        get reliable() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).reliable, true);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'RTCDataChannel', 'reliable', arguments, result);
            return result;
        },
        send() {
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'RTCDataChannel', 'send', arguments, result);
            return result;
        }
    };

    lwVm.rename(RTCDataChannel.prototype, "RTCDataChannel");
    lwVm.safeDescriptor_addConstructor(RTCDataChannel);
    lwVm.safe_Objattribute(RTCDataChannel, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCDataChannel.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCDataChannel, EventTarget);

})();

