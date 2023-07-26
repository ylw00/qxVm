AudioDestinationNode = function AudioDestinationNode(createObj_key, channelCountMode) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {
        channelCountMode:channelCountMode,
        maxChannelCount: 1
    })
}; lwVm.safefunction(AudioDestinationNode);

; (function () {
    const $safe_get_attribute = ['maxChannelCount'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    AudioDestinationNode.prototype = {
        get maxChannelCount() {
            if (!AudioDestinationNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).maxChannelCount;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'AudioDestinationNode', 'maxChannelCount', arguments, result);
            return result;
        },
    }
    lwVm.rename(AudioDestinationNode.prototype, "AudioDestinationNode");
    lwVm.safeDescriptor_addConstructor(AudioDestinationNode);
    lwVm.safe_Objattribute(AudioDestinationNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioDestinationNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(AudioDestinationNode, AudioNode);
})();

