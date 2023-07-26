VirtualKeyboard = function VirtualKeyboard(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(VirtualKeyboard);

; (function () {
    const $safe_get_attribute = ['boundingRect', 'ongeometrychange', 'overlaysContent'];
    const $safe_set_attribute = ['ongeometrychange', 'overlaysContent'];
    const $safe_func_attribute = ['hide', 'show'];

    VirtualKeyboard.prototype = {
        get boundingRect() { // 有问题
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).boundingRect, "");
        },
        hide() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'VirtualKeyboard', 'hide', arguments, result);
            return result;
        },
        get ongeometrychange() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ongeometrychange, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VirtualKeyboard', 'ongeometrychange', arguments, result);
            return result;
        },
        set ongeometrychange(value) {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'VirtualKeyboard', 'ongeometrychange', arguments);
            lwVm.memory.private_data.get(this).ongeometrychange = value + "";
        },
        get overlaysContent() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).overlaysContent, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'VirtualKeyboard', 'overlaysContent', arguments, result);
            return result;
        },
        set overlaysContent(value) {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'VirtualKeyboard', 'overlaysContent', arguments);
            lwVm.memory.private_data.get(this).overlaysContent = value ? true : false;
        },
        show() {
            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'VirtualKeyboard', 'show', arguments, result);
            return result;
        },
    }
    lwVm.rename(VirtualKeyboard.prototype, "VirtualKeyboard");
    lwVm.safeDescriptor_addConstructor(VirtualKeyboard);
    lwVm.safe_Objattribute(VirtualKeyboard, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(VirtualKeyboard.prototype, EventTarget.prototype);
    Object.setPrototypeOf(VirtualKeyboard, EventTarget);
})();

