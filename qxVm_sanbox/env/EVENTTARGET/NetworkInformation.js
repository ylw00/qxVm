NetworkInformation = function NetworkInformation(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(NetworkInformation);

; (function () {
    const $safe_get_attribute = ['downlink', 'effectiveType', 'onchange', 'rtt', 'saveData'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = [];

    NetworkInformation.prototype = {
        get downlink() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 0.4;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NetworkInformation', 'downlink', arguments, result);
            return result;
        },
        get effectiveType() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "4g";
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NetworkInformation', 'effectiveType', arguments, result);
            return result;
        },
        get onchange() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onchange, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NetworkInformation', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'NetworkInformation', 'onchange', arguments);
            lwVm.memory.private_data.get(this).onchange = value + "";
        },
        get rtt() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = 250;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NetworkInformation', 'rtt', arguments, result);
            return result;
        },
        get saveData() {
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = false;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'NetworkInformation', 'saveData', arguments, result);
            return result;
        },
    }
    lwVm.rename(NetworkInformation.prototype, "NetworkInformation");
    lwVm.safeDescriptor_addConstructor(NetworkInformation);
    lwVm.safe_Objattribute(NetworkInformation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
    Object.setPrototypeOf(NetworkInformation, EventTarget);

})();