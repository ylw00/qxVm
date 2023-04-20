AudioWorklet = function AudioWorklet(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(AudioWorklet);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    AudioWorklet.prototype = {
    }
    qxVm.rename(AudioWorklet.prototype, "AudioWorklet");
    qxVm.safeDescriptor_addConstructor(AudioWorklet);
    qxVm.safe_Objattribute(AudioWorklet, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(AudioWorklet.prototype, Worklet.prototype);
    Object.setPrototypeOf(AudioWorklet, Worklet);
})();

