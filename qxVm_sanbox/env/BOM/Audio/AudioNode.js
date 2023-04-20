AudioNode = function AudioNode(createObj_key, channelCountMode) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }

    channelCountMode = channelCountMode || "max"
    qxVm.memory.private_data.set(this, {
        channelCountMode:channelCountMode
    })
}; qxVm.safefunction(AudioNode);

; (function () {
    const $safe_get_attribute = ['channelCount', 'channelCountMode', 'channelInterpretation', 'context', 'numberOfInputs', 'numberOfOutputs'];
    const $safe_set_attribute = ['channelCount', 'channelCountMode', 'channelInterpretation'];
    const $safe_func_attribute = ['connect', 'disconnect'];

    AudioNode.prototype = {
        get channelCount() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).channelCount, 2);
        },
        set channelCount(value) {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).channelCount = value;
        },
        get channelCountMode() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).channelCountMode, "max");
        },
        set channelCountMode(value) {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).channelCountMode = value + "";
        },
        get channelInterpretation() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).channelInterpretation, "speakers");
        },
        set channelInterpretation(value) {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).channelInterpretation = value + "";
        },
        connect() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get context() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            // return this;
            let ele = qxVm.memory.private_data.get(this).context;
            if (ele === undefined) {
                ele = new OfflineAudioContext(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.get(this).context = ele;
            }
            return ele;
        },
        disconnect() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get numberOfInputs() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).numberOfInputs, 0);
        },
        get numberOfOutputs() {
            debugger;
            if (!AudioNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).numberOfOutputs, 1);
        },
    }
    qxVm.rename(AudioNode.prototype, "AudioNode");
    qxVm.safeDescriptor_addConstructor(AudioNode);
    qxVm.safe_Objattribute(AudioNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioNode.prototype, EventTarget.prototype);
    Object.setPrototypeOf(AudioNode, EventTarget);
})();