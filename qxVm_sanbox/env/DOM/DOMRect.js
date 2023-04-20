DOMRect = function DOMRect(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(DOMRect);

; (function () {
    const $safe_get_attribute = ['height', 'width', 'x', 'y'];
    const $safe_set_attribute = ['height', 'width', 'x', 'y'];
    const $safe_func_attribute = [];

    DOMRect.prototype = {
        get height() {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, 0);
        },
        set height(value) {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).height = value;
        },
        get width() {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, 0);
        },
        set width(value) {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).width = value;
        },
        get x() {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).x, 0);
        },
        set x(value) {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).x = value;
        },
        get y() {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).y, 0);
        },
        set y(value) {
            debugger;
            if (!DOMRect.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).y = value;
        },
    }
    qxVm.rename(DOMRect.prototype, "DOMRect");
    qxVm.safeDescriptor_addConstructor(DOMRect);
    qxVm.safe_Objattribute(DOMRect, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(DOMRect.prototype, DOMRectReadOnly.prototype);
    Object.setPrototypeOf(DOMRect, DOMRectReadOnly);
})();

