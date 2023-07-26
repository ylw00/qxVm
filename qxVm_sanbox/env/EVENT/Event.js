/*
Event:
    UIEvent:
        MouseEvent:
            PointerEvent
*/

Event = function Event(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(Event);

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
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).bubbles, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'bubbles', arguments, result);
            return result;
        },
        get cancelBubble() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cancelBubble, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'cancelBubble', arguments, result);
            return result;
        },
        set cancelBubble(value) {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Event', 'cancelBubble', arguments);
            lwVm.memory.private_data.get(this).cancelBubble = value ? true :false;
        },
        get cancelable() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).cancelable, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'cancelable', arguments, result);
            return result;
        },
        get composed() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).composed, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'composed', arguments, result);
            return result;
        },
        composedPath() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Event', 'composedPath', arguments, result);
            return result;
        },
        get currentTarget() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentTarget, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'currentTarget', arguments, result);
            return result;
        },
        get defaultPrevented() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).defaultPrevented, false);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'defaultPrevented', arguments, result);
            return result;
        },
        get eventPhase() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).eventPhase, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'eventPhase', arguments, result);
            return result;
        },
        initEvent() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Event', 'initEvent', arguments, result);
            return result;
        },
        get path() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = [];;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'path', arguments, result);
            return result;
        },
        preventDefault() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Event', 'preventDefault', arguments, result);
            return result;
        },
        get returnValue() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).returnValue, true);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'returnValue', arguments, result);
            return result;
        },
        set returnValue(value) {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'Event', 'returnValue', arguments);
            lwVm.memory.private_data.get(this).returnValue = value ? true :false;
        },
        get srcElement() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).srcElement, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'srcElement', arguments, result);
            return result;
        },
        stopImmediatePropagation() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Event', 'stopImmediatePropagation', arguments, result);
            return result;
        },
        stopPropagation() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'Event', 'stopPropagation', arguments, result);
            return result;
        },
        get target() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).target, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'target', arguments, result);
            return result;
        },
        get timeStamp() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).timeStamp, 2778.600000023842);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Event', 'timeStamp', arguments, result);
            return result;
        },
        get type() {
            if (!Event.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).type, "");
        }
    };

    lwVm.rename(Event.prototype, "Event");
    lwVm.add_capitalLetter_attribute(Event, $attributes);
    lwVm.safeDescriptor_addConstructor(Event);
    lwVm.safe_Objattribute(Event, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
