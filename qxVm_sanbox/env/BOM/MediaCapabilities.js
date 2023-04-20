MediaCapabilities = function MediaCapabilities(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(MediaCapabilities);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['decodingInfo'];
    
    MediaCapabilities.prototype = {
        decodingInfo() {
            debugger;
            if (!MediaCapabilities.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(MediaCapabilities.prototype, "MediaCapabilities");
    qxVm.safeDescriptor_addConstructor(MediaCapabilities);
    qxVm.safe_Objattribute(MediaCapabilities, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
