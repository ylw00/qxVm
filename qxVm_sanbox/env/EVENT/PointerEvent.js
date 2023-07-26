PointerEvent = function PointerEvent(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(PointerEvent);

; (function () {
    const $safe_get_attribute = ['altitudeAngle', 'azimuthAngle', 'height', 'isPrimary', 'pointerId', 'pointerType', 'pressure', 'tangentialPressure', 'tiltX', 'tiltY', 'twist', 'width'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getCoalescedEvents', 'getPredictedEvents'];

    PointerEvent.prototype = {
        get altitudeAngle() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).altitudeAngle, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'altitudeAngle', arguments, result);
            return result;
        },
        get azimuthAngle() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).azimuthAngle, "");;
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
            let result = lwVm.abs(lwVm.memory.private_data.get(this).height, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'height', arguments, result);
            return result;
        },
        get isPrimary() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).isPrimary, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'isPrimary', arguments, result);
            return result;
        },
        get pointerId() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pointerId, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'pointerId', arguments, result);
            return result;
        },
        get pointerType() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pointerType, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'pointerType', arguments, result);
            return result;
        },
        get pressure() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).pressure, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'pressure', arguments, result);
            return result;
        },
        get tangentialPressure() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).tangentialPressure, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'tangentialPressure', arguments, result);
            return result;
        },
        get tiltX() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).tiltX, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'tiltX', arguments, result);
            return result;
        },
        get tiltY() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).tiltY, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'tiltY', arguments, result);
            return result;
        },
        get twist() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).twist, "");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'PointerEvent', 'twist', arguments, result);
            return result;
        },
        get width() {
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).width, "");;
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

