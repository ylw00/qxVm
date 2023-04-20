CookieStore = function CookieStore(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(CookieStore);

; (function () {
    const $safe_get_attribute = ['onchange'];
    const $safe_set_attribute = ['onchange'];
    const $safe_func_attribute = ['delete', 'get', 'getAll', 'set'];

    CookieStore.prototype = {
        delete() {
            debugger;
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get() {
            debugger;
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getAll() {
            debugger;
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get onchange() {
            debugger;
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onchange, null);
        },
        set onchange(value) {
            debugger;
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onchange = value + "";
        },
        set() {
            debugger;
            if (!CookieStore.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(CookieStore.prototype, "CookieStore");
    qxVm.safeDescriptor_addConstructor(CookieStore);
    qxVm.safe_Objattribute(CookieStore, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(CookieStore.prototype, EventTarget.prototype);
    Object.setPrototypeOf(CookieStore, EventTarget);
})();
cookieStore = new CookieStore(qxVm.memory.$createObj_key);

