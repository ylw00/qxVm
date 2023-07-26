AudioWorklet = function AudioWorklet(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(AudioWorklet);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    AudioWorklet.prototype = {
    }
    lwVm.rename(AudioWorklet.prototype, "AudioWorklet");
    lwVm.safeDescriptor_addConstructor(AudioWorklet);
    lwVm.safe_Objattribute(AudioWorklet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioWorklet.prototype, Worklet.prototype);
    Object.setPrototypeOf(AudioWorklet, Worklet);
})();

