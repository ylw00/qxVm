MouseEvent = function MouseEvent(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(MouseEvent);

; (function () {
    const $safe_get_attribute = [
        'altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'fromElement', 'layerX', 'layerY', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 
        'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'toElement', 'x', 'y'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getModifierState', 'initMouseEvent'];

    MouseEvent.prototype = {
        get altKey() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).altKey, "");
        },
        get button() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).button, "");
        },
        get buttons() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).buttons, "");
        },
        get clientX() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).clientX, "");
        },
        get clientY() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).clientY, "");
        },
        get ctrlKey() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).ctrlKey, "");
        },
        get fromElement() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).fromElement, "");
        },
        getModifierState() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        initMouseEvent() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get layerX() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).layerX, "");
        },
        get layerY() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).layerY, "");
        },
        get metaKey() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).metaKey, "");
        },
        get movementX() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).movementX, "");
        },
        get movementY() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).movementY, "");
        },
        get offsetX() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).offsetX, "");
        },
        get offsetY() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).offsetY, "");
        },
        get pageX() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pageX, "");
        },
        get pageY() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pageY, "");
        },
        get relatedTarget() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).relatedTarget, "");
        },
        get screenX() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).screenX, "");
        },
        get screenY() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).screenY, "");
        },
        get shiftKey() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).shiftKey, "");
        },
        get toElement() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).toElement, "");
        },
        get x() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).x, "");
        },
        get y() {
            debugger;
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).y, "");
        }
    }

    qxVm.rename(MouseEvent.prototype, "MouseEvent");
    qxVm.safeDescriptor_addConstructor(MouseEvent);
    qxVm.safe_Objattribute(MouseEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(MouseEvent, UIEvent);

})();

