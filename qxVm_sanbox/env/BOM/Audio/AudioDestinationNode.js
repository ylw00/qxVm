AudioDestinationNode = function AudioDestinationNode(createObj_key, channelCountMode) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {
        channelCountMode:channelCountMode,
        maxChannelCount: 1
    })
}; qxVm.safefunction(AudioDestinationNode);

; (function () {
    const $safe_get_attribute = ['maxChannelCount'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    AudioDestinationNode.prototype = {
        get maxChannelCount() {
            debugger;
            if (!AudioDestinationNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).maxChannelCount;
        },
    }
    qxVm.rename(AudioDestinationNode.prototype, "AudioDestinationNode");
    qxVm.safeDescriptor_addConstructor(AudioDestinationNode);
    qxVm.safe_Objattribute(AudioDestinationNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioDestinationNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(AudioDestinationNode, AudioNode);
})();

