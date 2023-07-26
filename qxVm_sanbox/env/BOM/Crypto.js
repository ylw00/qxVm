Crypto = function Crypto(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Crypto);
// crypto = {};

; (function () {
    const $safe_get_attribute = ['subtle'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getRandomValues', 'randomUUID'];

    Crypto.prototype = {
        getRandomValues() {
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Crypto', 'getRandomValues', arguments, result);
            return result;
        },
        randomUUID() {
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Crypto', 'randomUUID', arguments, result);
            return result;
        },
        get subtle() {
            if (!Crypto.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).subtle, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Crypto', 'subtle', arguments, result);
            return result;
        },
    }
    lwVm.rename(Crypto.prototype, "Crypto");
    lwVm.safeDescriptor_addConstructor(Crypto);
    lwVm.safe_Objattribute(Crypto, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    // Object.setPrototypeOf(crypto, Crypto.prototype);
})();
crypto = new Crypto(lwVm.memory.$createObj_key)

