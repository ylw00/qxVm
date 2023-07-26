AudioScheduledSourceNode = function AudioScheduledSourceNode(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(AudioScheduledSourceNode);

; (function () {
    const $safe_get_attribute = ['onended'];
    const $safe_set_attribute = ['onended'];
    const $safe_func_attribute = ['start', 'stop'];

    AudioScheduledSourceNode.prototype = {
        get onended() {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onended, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioScheduledSourceNode', 'onended', arguments, result);
            return result;
        },
        set onended(value) {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'AudioScheduledSourceNode', 'onended', arguments);
            lwVm.memory.private_data.get(this).onended = value;
        },
        start() {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'AudioScheduledSourceNode', 'start', arguments, result);
            return result;
        },
        stop() {
            if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'AudioScheduledSourceNode', 'stop', arguments, result);
            return result;
        },
    }
    lwVm.rename(AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode");
    lwVm.safeDescriptor_addConstructor(AudioScheduledSourceNode);
    lwVm.safe_Objattribute(AudioScheduledSourceNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioScheduledSourceNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(AudioScheduledSourceNode, AudioNode);
})();

