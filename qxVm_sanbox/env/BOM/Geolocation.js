Geolocation = function Geolocation(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Geolocation);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['clearWatch', 'getCurrentPosition', 'watchPosition'];
    
    Geolocation.prototype = {
        clearWatch() {
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Geolocation', 'clearWatch', arguments, result);
            return result;
        },
        getCurrentPosition() {
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Geolocation', 'getCurrentPosition', arguments, result);
            return result;
        },
        watchPosition() {
            if (!Geolocation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Geolocation', 'watchPosition', arguments, result);
            return result;
        },
    }
    lwVm.rename(Geolocation.prototype, "Geolocation");
    lwVm.safeDescriptor_addConstructor(Geolocation);
    lwVm.safe_Objattribute(Geolocation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();