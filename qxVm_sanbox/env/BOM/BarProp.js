BarProp = function BarProp(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
}; qxVm.safefunction(BarProp);

; (function () {
    const $safe_get_attribute = ['visible'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    BarProp.prototype = {
        get visible() {
            debugger;
            if (!BarProp.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return true;
        },
    }
    qxVm.rename(BarProp.prototype, "BarProp");
    qxVm.safeDescriptor_addConstructor(BarProp);
    qxVm.safe_Objattribute(BarProp, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
locationbar = new BarProp(qxVm.memory.$createObj_key);
menubar = new BarProp(qxVm.memory.$createObj_key);
personalbar = new BarProp(qxVm.memory.$createObj_key);
scrollbars = new BarProp(qxVm.memory.$createObj_key);
statusbar = new BarProp(qxVm.memory.$createObj_key);
toolbar = new BarProp(qxVm.memory.$createObj_key);

