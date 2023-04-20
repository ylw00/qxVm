VirtualKeyboard = function VirtualKeyboard(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(VirtualKeyboard);

; (function () {
    const $safe_get_attribute = ['boundingRect', 'ongeometrychange', 'overlaysContent'];
    const $safe_set_attribute = ['ongeometrychange', 'overlaysContent'];
    const $safe_func_attribute = ['hide', 'show'];

    VirtualKeyboard.prototype = {
        get boundingRect() { // 有问题
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).boundingRect, "");
        },
        hide() {
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get ongeometrychange() {
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ongeometrychange, null);
        },
        set ongeometrychange(value) {
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).ongeometrychange = value + "";
        },
        get overlaysContent() {
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).overlaysContent, false);
        },
        set overlaysContent(value) {
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).overlaysContent = value ? true : false;
        },
        show() {
            debugger;
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(VirtualKeyboard.prototype, "VirtualKeyboard");
    qxVm.safeDescriptor_addConstructor(VirtualKeyboard);
    qxVm.safe_Objattribute(VirtualKeyboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(VirtualKeyboard.prototype, EventTarget.prototype);
    Object.setPrototypeOf(VirtualKeyboard, EventTarget);
})();

