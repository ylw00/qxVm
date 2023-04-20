UIEvent = function UIEvent(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(UIEvent);

; (function () {
    const $safe_get_attribute = ['detail', 'sourceCapabilities', 'view', 'which'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['initUIEvent'];

    UIEvent.prototype = {
        get detail() {
            debugger;
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).detail, "");
        },
        initUIEvent() {
            debugger;
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get sourceCapabilities() {
            debugger;
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).sourceCapabilities, "");
        },
        get view() {
            debugger;
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).view, "");
        },
        get which() {
            debugger;
            if (!UIEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).which, "");
        }
    }

    qxVm.rename(UIEvent.prototype, "UIEvent");
    qxVm.safeDescriptor_addConstructor(UIEvent);
    qxVm.safe_Objattribute(UIEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
    Object.setPrototypeOf(UIEvent, Event);

})();

