Geolocation = function Geolocation(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Geolocation);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['clearWatch', 'getCurrentPosition', 'watchPosition'];
    
    Geolocation.prototype = {
        clearWatch() {
            debugger;
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getCurrentPosition() {
            debugger;
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        watchPosition() {
            debugger;
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Geolocation.prototype, "Geolocation");
    qxVm.safeDescriptor_addConstructor(Geolocation);
    qxVm.safe_Objattribute(Geolocation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();