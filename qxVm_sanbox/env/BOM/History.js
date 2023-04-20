History = function History() {
    throw new TypeError("Illegal constructor");
}; qxVm.safefunction(History);
history = {};

; (function () {
    const $safe_get_attribute = ['length', 'scrollRestoration', 'state'];
    const $safe_set_attribute = ['scrollRestoration'];
    const $safe_func_attribute = ['back', 'forward', 'go', 'pushState', 'replaceState'];

    History.prototype = {
        back() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        forward() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        go() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get length() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return Object.keys(this).length;
        },
        pushState() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        replaceState() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get scrollRestoration() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return "auto";
        },
        set scrollRestoration(value) {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get state() {
            debugger;
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return {
                idx: 0
            }
        }
    }; qxVm.rename(History.prototype, 'History')
    qxVm.safeDescriptor_addConstructor(History);
    qxVm.safe_Objattribute(History, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(history, History.prototype);

})();

// debugger;