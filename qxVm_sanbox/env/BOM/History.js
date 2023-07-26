History = function History() {
    throw new TypeError("Illegal constructor");
}; lwVm.safefunction(History);
history = {};

; (function () {
    const $safe_get_attribute = ['length', 'scrollRestoration', 'state'];
    const $safe_set_attribute = ['scrollRestoration'];
    const $safe_func_attribute = ['back', 'forward', 'go', 'pushState', 'replaceState'];

    History.prototype = {
        back() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'History', 'back', arguments, result);
            return result;
        },
        forward() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'History', 'forward', arguments, result);
            return result;
        },
        go() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'History', 'go', arguments, result);
            return result;
        },
        get length() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = Object.keys(this).length;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'History', 'length', arguments, result);
            return result;
        },
        pushState() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'History', 'pushState', arguments, result);
            return result;
        },
        replaceState() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'History', 'replaceState', arguments, result);
            return result;
        },
        get scrollRestoration() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = "auto";;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'History', 'scrollRestoration', arguments, result);
            return result;
        },
        set scrollRestoration(value) {
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'History', 'scrollRestoration', arguments);
            lwVm.memory.private_data.get(this).scrollRestoration = value;
        },
        get state() {
            if (!History.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return {
                idx: 0
            }
        }
    }; lwVm.rename(History.prototype, 'History')
    lwVm.safeDescriptor_addConstructor(History);
    lwVm.safe_Objattribute(History, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(history, History.prototype);

})();

// debugger;