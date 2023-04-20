RTCDataChannel = function RTCDataChannel(createObj_key, label) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {label:label})
}; qxVm.safefunction(RTCDataChannel);

; (function () {
    const $safe_get_attribute = ['binaryType', 'bufferedAmount', 'bufferedAmountLowThreshold', 'id', 'label', 'maxRetransmitTime', 'maxRetransmits', 'negotiated', 'onbufferedamountlow', 'onclose', 'onerror', 'onmessage', 'onopen', 'ordered', 'protocol', 'readyState', 'reliable'];
    const $safe_set_attribute = ['binaryType', 'bufferedAmount', 'bufferedAmountLowThreshold', 'onbufferedamountlow', 'onclose', 'onerror', 'onmessage', 'onopen'];
    const $safe_func_attribute = ['close', 'send'];
    RTCDataChannel.prototype = {

        get binaryType() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).binaryType, "arraybuffer");
        },
        set binaryType(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).binaryType = value + "";
        },
        get bufferedAmount() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).bufferedAmount, 0);
        },
        set bufferedAmount(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).bufferedAmount = value;
        },
        get bufferedAmountLowThreshold() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).bufferedAmountLowThreshold, 0);
        },
        set bufferedAmountLowThreshold(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).bufferedAmountLowThreshold = value;
        },
        close() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get id() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).id, null);
        },
        get label() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).label;
        },
        get maxRetransmitTime() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).maxRetransmitTime, null);
        },
        get maxRetransmits() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).maxRetransmits, null);
        },
        get negotiated() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).negotiated, false);
        },
        get onbufferedamountlow() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onbufferedamountlow, null);
        },
        set onbufferedamountlow(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onbufferedamountlow = value + "";
        },
        get onclose() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onclose, null);
        },
        set onclose(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onclose = value + "";
        },
        get onerror() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onerror, null);
        },
        set onerror(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onerror = value + "";
        },
        get onmessage() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onmessage, null);
        },
        set onmessage(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onmessage = value + "";
        },
        get onopen() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onopen, null);
        },
        set onopen(value) {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onopen = value + "";
        },
        get ordered() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ordered, true);
        },
        get protocol() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).protocol, "");
        },
        get readyState() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).readyState, "connecting");
        },
        get reliable() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).reliable, true);
        },
        send() {
            debugger;
            if (!RTCDataChannel.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        }
    };

    qxVm.rename(RTCDataChannel.prototype, "RTCDataChannel");
    qxVm.safeDescriptor_addConstructor(RTCDataChannel);
    qxVm.safe_Objattribute(RTCDataChannel, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCDataChannel.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCDataChannel, EventTarget);

})();

