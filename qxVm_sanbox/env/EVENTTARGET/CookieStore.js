CookieStore = function CookieStore(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(CookieStore);

; (function () {
    const $safe_get_attribute = ['onchange'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = ['delete', 'get', 'getAll', 'set'];

    CookieStore.prototype = {
        delete() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CookieStore', 'delete', arguments, result);
            return result;
        },
        get() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CookieStore', 'get', arguments, result);
            return result;
        },
        getAll() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CookieStore', 'getAll', arguments, result);
            return result;
        },
        get onchange() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onchange, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'CookieStore', 'onchange', arguments, result);
            return result;
        },
        set onchange(value) {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'CookieStore', 'onchange', arguments);
            lwVm.memory.private_data.get(this).onchange = value + "";
        },
        set() {
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'CookieStore', 'set', arguments, result);
            return result;
        },
    }
    lwVm.rename(CookieStore.prototype, "CookieStore");
    lwVm.safeDescriptor_addConstructor(CookieStore);
    lwVm.safe_Objattribute(CookieStore, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CookieStore.prototype, EventTarget.prototype);
    Object.setPrototypeOf(CookieStore, EventTarget);
})();
cookieStore = new CookieStore(lwVm.memory.$createObj_key);

