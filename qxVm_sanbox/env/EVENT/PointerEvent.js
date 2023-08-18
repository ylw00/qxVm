PointerEvent = function PointerEvent(type, ...args) {//构造函数
    if (new.target !== PointerEvent) throw new TypeError(`Failed to construct 'PointerEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    lwVm.protectAddIsTrusted(this);
    lwVm.memory.private_data.set(this, { })
}; lwVm.safefunction(PointerEvent);

; (function () {
    const $safe_get_attribute = ['altitudeAngle', 'azimuthAngle', 'height', 'isPrimary', 'pointerId', 'pointerType', 'pressure', 'tangentialPressure', 'tiltX', 'tiltY', 'twist', 'width'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getCoalescedEvents', 'getPredictedEvents'];

    PointerEvent.prototype = {
        get altitudeAngle() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).altitudeAnglelwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'altitudeAngle', arguments, result);
            return result;
        },
        get azimuthAngle() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).azimuthAnglelwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'azimuthAngle', arguments, result);
            return result;
        },
        getCoalescedEvents() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PointerEvent', 'getCoalescedEvents', arguments, result);
            return result;
        },
        getPredictedEvents() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'PointerEvent', 'getPredictedEvents', arguments, result);
            return result;
        },
        get height() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).heightlwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'height', arguments, result);
            return result;
        },
        get isPrimary() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).isPrimarylwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'isPrimary', arguments, result);
            return result;
        },
        get pointerId() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).pointerIdlwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'pointerId', arguments, result);
            return result;
        },
        get pointerType() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).pointerTypelwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'pointerType', arguments, result);
            return result;
        },
        get pressure() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).pressurelwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'pressure', arguments, result);
            return result;
        },
        get tangentialPressure() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).tangentialPressurelwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'tangentialPressure', arguments, result);
            return result;
        },
        get tiltX() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).tiltXlwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'tiltX', arguments, result);
            return result;
        },
        get tiltY() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).tiltYlwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'tiltY', arguments, result);
            return result;
        },
        get twist() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).twistlwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'twist', arguments, result);
            return result;
        },
        get width() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVmlwVm.memory.private_data.get(this).widthlwVm;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'width', arguments, result);
            return result;
        },
    }

    lwVm.rename(PointerEvent.prototype, "PointerEvent");
    lwVm.safeDescriptor_addConstructor(PointerEvent);
    lwVm.safe_Objattribute(PointerEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);
    Object.setPrototypeOf(PointerEvent, MouseEvent);
})();

