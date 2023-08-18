AudioNode = function AudioNode(createObj_key, channelCountMode) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }

    channelCountMode = channelCountMode || "max"
    lwVm.memory.private_data.set(this, {
        channelCountMode:channelCountMode
    })
}; lwVm.safefunction(AudioNode);

; (function () {
    const $safe_get_attribute = ['channelCount', 'channelCountMode', 'channelInterpretation', 'context', 'numberOfInputs', 'numberOfOutputs'];
    const $safe_set_attribute = ['channelCount', 'channelCountMode', 'channelInterpretation'];
    const $safe_func_attribute = ['connect', 'disconnect'];

    AudioNode.prototype = {
        get channelCount() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).channelCount, 2);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioNode', 'channelCount', arguments, result);
            return result;
        },
        set channelCount(value) {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'AudioNode', 'channelCount', arguments);
            lwVm.memory.private_data.get(this).channelCount = value;
        },
        get channelCountMode() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).channelCountMode, "max");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioNode', 'channelCountMode', arguments, result);
            return result;
        },
        set channelCountMode(value) {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'AudioNode', 'channelCountMode', arguments);
            lwVm.memory.private_data.get(this).channelCountMode = value + "";
        },
        get channelInterpretation() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).channelInterpretation, "speakers");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioNode', 'channelInterpretation', arguments, result);
            return result;
        },
        set channelInterpretation(value) {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'AudioNode', 'channelInterpretation', arguments);
            lwVm.memory.private_data.get(this).channelInterpretation = value + "";
        },
        connect() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'AudioNode', 'connect', arguments, result);
            return result;
        },
        get context() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            // return this;
            let ele = lwVm.memory.private_data.get(this).context;
            if (ele === undefined) {
                ele = new OfflineAudioContext(lwVm.memory.$createObj_key);
                lwVm.memory.private_data.get(this).context = ele;
            }
            let result = ele;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioNode', 'context', arguments, result);
            return result;
        },
        disconnect() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'AudioNode', 'disconnect', arguments, result);
            return result;
        },
        get numberOfInputs() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).numberOfInputs, 0);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioNode', 'numberOfInputs', arguments, result);
            return result;
        },
        get numberOfOutputs() {
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).numberOfOutputs, 1);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioNode', 'numberOfOutputs', arguments, result);
            return result;
        },
    }
    lwVm.rename(AudioNode.prototype, "AudioNode");
    lwVm.safeDescriptor_addConstructor(AudioNode);
    lwVm.safe_Objattribute(AudioNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioNode.prototype, EventTarget.prototype);
    Object.setPrototypeOf(AudioNode, EventTarget);
})();