NetworkInformation = function NetworkInformation(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(NetworkInformation);

; (function () {
    const $safe_get_attribute = ['downlink', 'effectiveType', 'onchange', 'rtt', 'saveData'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = [];

    NetworkInformation.prototype = {
        get downlink() {
            debugger;
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0.4;
        },
        get effectiveType() {
            debugger;
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "4g";
        },
        get onchange() {
            debugger;
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onchange, null);
        },
        set onchange(value) {
            debugger;
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onchange = value + "";
        },
        get rtt() {
            debugger;
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 250;
        },
        get saveData() {
            debugger;
            if (!NetworkInformation.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return false;
        },
    }
    qxVm.rename(NetworkInformation.prototype, "NetworkInformation");
    qxVm.safeDescriptor_addConstructor(NetworkInformation);
    qxVm.safe_Objattribute(NetworkInformation, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
    Object.setPrototypeOf(NetworkInformation, EventTarget);

})();