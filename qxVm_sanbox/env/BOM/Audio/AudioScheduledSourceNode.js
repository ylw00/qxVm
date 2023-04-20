AudioScheduledSourceNode = function AudioScheduledSourceNode(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(AudioScheduledSourceNode);

; (function () {
    const $safe_get_attribute = ['onended'];
    const $safe_set_attribute = ['onended'];
    const $safe_func_attribute = ['start', 'stop'];

    AudioScheduledSourceNode.prototype = {
        get onended() {
            debugger;
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onended, null);
        },
        set onended(value) {
            debugger;
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onended = value;
        },
        start() {
            debugger;
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stop() {
            debugger;
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode");
    qxVm.safeDescriptor_addConstructor(AudioScheduledSourceNode);
    qxVm.safe_Objattribute(AudioScheduledSourceNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioScheduledSourceNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(AudioScheduledSourceNode, AudioNode);
})();

