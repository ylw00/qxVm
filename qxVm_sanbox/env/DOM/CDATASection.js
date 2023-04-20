CDATASection = function CDATASection(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CDATASection);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    CDATASection.prototype = { }
    qxVm.rename(CDATASection.prototype, "CDATASection");
    qxVm.safeDescriptor_addConstructor(CDATASection);
    qxVm.safe_Objattribute(CDATASection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CDATASection.prototype, Text.prototype);
    Object.setPrototypeOf(CDATASection, Text);

})();