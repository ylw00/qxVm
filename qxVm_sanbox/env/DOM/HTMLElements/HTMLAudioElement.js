HTMLAudioElement = function HTMLAudioElement(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(HTMLAudioElement);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    HTMLAudioElement.prototype = {};

    lwVm.rename(HTMLAudioElement.prototype, "HTMLAudioElement");
    lwVm.safeDescriptor_addConstructor(HTMLAudioElement);
    lwVm.safe_Objattribute(HTMLAudioElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLAudioElement, HTMLMediaElement);

})();

lwVm.memory.htmlElements["audio"] = function () {
    return new HTMLAudioElement(lwVm.memory.$createObj_key);
}

