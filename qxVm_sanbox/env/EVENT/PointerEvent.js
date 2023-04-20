PointerEvent = function PointerEvent(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(PointerEvent);

; (function () {
    const $safe_get_attribute = ['altitudeAngle', 'azimuthAngle', 'height', 'isPrimary', 'pointerId', 'pointerType', 'pressure', 'tangentialPressure', 'tiltX', 'tiltY', 'twist', 'width'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['getCoalescedEvents', 'getPredictedEvents'];

    PointerEvent.prototype = {
        get altitudeAngle() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).altitudeAngle, "");
        },
        get azimuthAngle() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).azimuthAngle, "");
        },
        getCoalescedEvents() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        getPredictedEvents() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get height() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).height, "");
        },
        get isPrimary() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).isPrimary, "");
        },
        get pointerId() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pointerId, "");
        },
        get pointerType() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pointerType, "");
        },
        get pressure() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).pressure, "");
        },
        get tangentialPressure() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).tangentialPressure, "");
        },
        get tiltX() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).tiltX, "");
        },
        get tiltY() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).tiltY, "");
        },
        get twist() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).twist, "");
        },
        get width() {
            debugger;
            if (!PointerEvent.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).width, "");
        },
    }

    qxVm.rename(PointerEvent.prototype, "PointerEvent");
    qxVm.safeDescriptor_addConstructor(PointerEvent);
    qxVm.safe_Objattribute(PointerEvent, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);
    Object.setPrototypeOf(PointerEvent, MouseEvent);
})();

