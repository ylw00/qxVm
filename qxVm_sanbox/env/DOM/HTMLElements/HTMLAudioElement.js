HTMLAudioElement = function HTMLAudioElement(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(HTMLAudioElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLAudioElement.prototype = {};

    qxVm.rename(HTMLAudioElement.prototype, "HTMLAudioElement");
    qxVm.safeDescriptor_addConstructor(HTMLAudioElement);
    qxVm.safe_Objattribute(HTMLAudioElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLAudioElement, HTMLMediaElement);

})();

qxVm.memory.htmlElements["audio"] = function () {
    return new HTMLAudioElement(qxVm.memory.$createObj_key);
}

