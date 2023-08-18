BarProp = function BarProp(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
}; lwVm.safefunction(BarProp);

; (function () {
    const $safe_get_attribute = ['visible'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    BarProp.prototype = {
        get visible() {
            if (!BarProp.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = true;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BarProp', 'visible', arguments, result);
            return result;
        },
    }
    lwVm.rename(BarProp.prototype, "BarProp");
    lwVm.safeDescriptor_addConstructor(BarProp);
    lwVm.safe_Objattribute(BarProp, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
locationbar = new BarProp(lwVm.memory.$createObj_key);
menubar = new BarProp(lwVm.memory.$createObj_key);
personalbar = new BarProp(lwVm.memory.$createObj_key);
scrollbars = new BarProp(lwVm.memory.$createObj_key);
statusbar = new BarProp(lwVm.memory.$createObj_key);
toolbar = new BarProp(lwVm.memory.$createObj_key);

