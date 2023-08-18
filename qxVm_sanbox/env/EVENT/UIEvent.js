UIEvent = function UIEvent(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(UIEvent);

; (function () {
    const $safe_get_attribute = ['detail', 'sourceCapabilities', 'view', 'which'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initUIEvent'];

    UIEvent.prototype = {
        get detail() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).detail, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'UIEvent', 'detail', arguments, result);
            return result;
        },
        initUIEvent() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'UIEvent', 'initUIEvent', arguments, result);
            return result;
        },
        get sourceCapabilities() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).sourceCapabilities, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'UIEvent', 'sourceCapabilities', arguments, result);
            return result;
        },
        get view() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).view, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'UIEvent', 'view', arguments, result);
            return result;
        },
        get which() {
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).which, "");
        }
    }

    lwVm.rename(UIEvent.prototype, "UIEvent");
    lwVm.safeDescriptor_addConstructor(UIEvent);
    lwVm.safe_Objattribute(UIEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
    Object.setPrototypeOf(UIEvent, Event);

})();

