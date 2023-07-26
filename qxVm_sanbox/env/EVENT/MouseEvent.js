MouseEvent = function MouseEvent(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(MouseEvent);

; (function () {
    const $safe_get_attribute = [
        'altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'fromElement', 'layerX', 'layerY', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 
        'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'toElement', 'x', 'y'
    ];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getModifierState', 'initMouseEvent'];

    MouseEvent.prototype = {
        get altKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).altKey, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'altKey', arguments, result);
            return result;
        },
        get button() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).button, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'button', arguments, result);
            return result;
        },
        get buttons() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).buttons, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'buttons', arguments, result);
            return result;
        },
        get clientX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).clientX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'clientX', arguments, result);
            return result;
        },
        get clientY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).clientY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'clientY', arguments, result);
            return result;
        },
        get ctrlKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).ctrlKey, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'ctrlKey', arguments, result);
            return result;
        },
        get fromElement() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).fromElement, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'fromElement', arguments, result);
            return result;
        },
        getModifierState() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MouseEvent', 'getModifierState', arguments, result);
            return result;
        },
        initMouseEvent() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MouseEvent', 'initMouseEvent', arguments, result);
            return result;
        },
        get layerX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).layerX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'layerX', arguments, result);
            return result;
        },
        get layerY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).layerY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'layerY', arguments, result);
            return result;
        },
        get metaKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).metaKey, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'metaKey', arguments, result);
            return result;
        },
        get movementX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).movementX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'movementX', arguments, result);
            return result;
        },
        get movementY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).movementY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'movementY', arguments, result);
            return result;
        },
        get offsetX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).offsetX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'offsetX', arguments, result);
            return result;
        },
        get offsetY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).offsetY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'offsetY', arguments, result);
            return result;
        },
        get pageX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pageX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'pageX', arguments, result);
            return result;
        },
        get pageY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pageY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'pageY', arguments, result);
            return result;
        },
        get relatedTarget() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).relatedTarget, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'relatedTarget', arguments, result);
            return result;
        },
        get screenX() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).screenX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'screenX', arguments, result);
            return result;
        },
        get screenY() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).screenY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'screenY', arguments, result);
            return result;
        },
        get shiftKey() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).shiftKey, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'shiftKey', arguments, result);
            return result;
        },
        get toElement() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).toElement, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'toElement', arguments, result);
            return result;
        },
        get x() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).x, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MouseEvent', 'x', arguments, result);
            return result;
        },
        get y() {
            if (!MouseEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).y, "");
        }
    }

    lwVm.rename(MouseEvent.prototype, "MouseEvent");
    lwVm.safeDescriptor_addConstructor(MouseEvent);
    lwVm.safe_Objattribute(MouseEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);
    Object.setPrototypeOf(MouseEvent, UIEvent);

})();

