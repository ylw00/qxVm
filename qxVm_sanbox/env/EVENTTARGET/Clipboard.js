Clipboard = function Clipboard(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Clipboard);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['read', 'readText', 'write', 'writeText'];
    
    Clipboard.prototype = {
        read() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Clipboard', 'read', arguments, result);
            return result;
        },
        readText() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Clipboard', 'readText', arguments, result);
            return result;
        },
        write() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Clipboard', 'write', arguments, result);
            return result;
        },
        writeText() {
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Clipboard', 'writeText', arguments, result);
            return result;
        },
    }
    lwVm.rename(Clipboard.prototype, "Clipboard");
    lwVm.safeDescriptor_addConstructor(Clipboard);
    lwVm.safe_Objattribute(Clipboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Clipboard.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Clipboard, EventTarget);
})();

