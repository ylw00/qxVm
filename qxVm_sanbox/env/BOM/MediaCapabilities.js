MediaCapabilities = function MediaCapabilities(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(MediaCapabilities);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['decodingInfo'];
    
    MediaCapabilities.prototype = {
        decodingInfo() {
            if (!MediaCapabilities.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaCapabilities', 'decodingInfo', arguments, result);
            return result;
        },
    }
    lwVm.rename(MediaCapabilities.prototype, "MediaCapabilities");
    lwVm.safeDescriptor_addConstructor(MediaCapabilities);
    lwVm.safe_Objattribute(MediaCapabilities, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
