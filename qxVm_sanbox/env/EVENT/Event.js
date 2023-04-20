/*
Event:
    UIEvent:
        MouseEvent:
            PointerEvent
*/

Event = function Event(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Event);

; (function () {
    const $attributes = {
        AT_TARGET: 2,
        BUBBLING_PHASE: 3,
        CAPTURING_PHASE: 1,
        NONE: 0
    };
    const $safe_get_attribute = ['bubbles', 'cancelBubble', 'cancelable', 'composed', 'currentTarget', 'defaultPrevented', 'eventPhase', 'path', 'returnValue', 'srcElement', 'target', 'timeStamp', 'type'];
    const $safe_set_attribute = ['cancelBubble', 'returnValue'];
    const $safe_func_attribute = ['composedPath', 'initEvent', 'preventDefault', 'stopImmediatePropagation', 'stopPropagation'];

    Event.prototype = {
        get bubbles() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).bubbles, false);
        },
        get cancelBubble() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).cancelBubble, false);
        },
        set cancelBubble(value) {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).cancelBubble = value ? true :false;
        },
        get cancelable() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).cancelable, false);
        },
        get composed() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).composed, false);
        },
        composedPath() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get currentTarget() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentTarget, null);
        },
        get defaultPrevented() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultPrevented, false);
        },
        get eventPhase() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).eventPhase, 0);
        },
        initEvent() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get path() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return [];
        },
        preventDefault() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get returnValue() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).returnValue, true);
        },
        set returnValue(value) {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).returnValue = value ? true :false;
        },
        get srcElement() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).srcElement, null);
        },
        stopImmediatePropagation() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        stopPropagation() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get target() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).target, null);
        },
        get timeStamp() {
            debugger;
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).timeStamp, 2778.600000023842);
        },
        get type() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "");
        }
    };

    qxVm.rename(Event.prototype, "Event");
    qxVm.add_capitalLetter_attribute(Event, $attributes);
    qxVm.safeDescriptor_addConstructor(Event);
    qxVm.safe_Objattribute(Event, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
