Crypto = function Crypto(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Crypto);
// crypto = {};

; (function () {
    const $safe_get_attribute = ['subtle'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getRandomValues', 'randomUUID'];

    Crypto.prototype = {
        getRandomValues() {
            debugger;
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        randomUUID() {
            debugger;
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get subtle() {
            debugger;
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).subtle, "");
        },
    }
    qxVm.rename(Crypto.prototype, "Crypto");
    qxVm.safeDescriptor_addConstructor(Crypto);
    qxVm.safe_Objattribute(Crypto, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    // Object.setPrototypeOf(crypto, Crypto.prototype);
})();
crypto = new Crypto(qxVm.memory.$createObj_key)

