CDATASection = function CDATASection(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CDATASection);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    CDATASection.prototype = { }
    lwVm.rename(CDATASection.prototype, "CDATASection");
    lwVm.safeDescriptor_addConstructor(CDATASection);
    lwVm.safe_Objattribute(CDATASection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CDATASection.prototype, Text.prototype);
    Object.setPrototypeOf(CDATASection, Text);

})();