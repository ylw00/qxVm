DOMRectReadOnly = function DOMRectReadOnly(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(DOMRectReadOnly);

; (function () {
    const $safe_get_attribute = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    DOMRectReadOnly.prototype = {
        get bottom() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get height() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get left() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get right() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        toJSON() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get top() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get width() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get x() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get y() {
            debugger;
            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
    }
    qxVm.rename(DOMRectReadOnly.prototype, "DOMRectReadOnly");
    qxVm.safeDescriptor_addConstructor(DOMRectReadOnly);
    qxVm.safe_Objattribute(DOMRectReadOnly, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

