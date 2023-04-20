Clipboard = function Clipboard(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Clipboard);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['read', 'readText', 'write', 'writeText'];
    
    Clipboard.prototype = {
        read() {
            debugger;
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        readText() {
            debugger;
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        write() {
            debugger;
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        writeText() {
            debugger;
            if (!Clipboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Clipboard.prototype, "Clipboard");
    qxVm.safeDescriptor_addConstructor(Clipboard);
    qxVm.safe_Objattribute(Clipboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Clipboard.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Clipboard, EventTarget);
})();

