AudioParam = function AudioParam(createObj_key, automationRate, defaultValue, maxValue, minValue) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }

    automationRate = automationRate || "a-rate";
    defaultValue = defaultValue || -1;

    maxValue = maxValue || 3.4028234663852886e+38;
    minValue = minValue || -3.4028234663852886e+38;
    const value = defaultValue;
    qxVm.memory.private_data.set(this, {
        automationRate: automationRate,
        defaultValue: defaultValue,
        maxValue: maxValue,
        minValue: minValue,
        value: value
    })
}; qxVm.safefunction(AudioParam);

; (function () {
    const $safe_get_attribute = ['automationRate', 'defaultValue', 'maxValue', 'minValue', 'value'];
    const $safe_set_attribute = ['automationRate', 'value'];
    const $safe_func_attribute = [
        'cancelAndHoldAtTime', 'cancelScheduledValues', 'exponentialRampToValueAtTime', 'linearRampToValueAtTime',
        'setTargetAtTime', 'setValueAtTime', 'setValueCurveAtTime'
    ];

    AudioParam.prototype = {
        get automationRate() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).automationRate, "a-rate");
        },
        set automationRate(value) {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).automationRate = value;
        },
        cancelAndHoldAtTime() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        cancelScheduledValues() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get defaultValue() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).defaultValue, 0);
        },
        exponentialRampToValueAtTime() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        linearRampToValueAtTime() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get maxValue() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).maxValue;
        },
        get minValue() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).minValue;
        },
        setTargetAtTime() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setValueAtTime() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new AudioParam(qxVm.memory.$createObj_key, "a-rate", 440, 22050);
        },
        setValueCurveAtTime() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get value() {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).value, 0);
        },
        set value(value) {
            debugger;
            if (!AudioParam.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).value = value;
        },
    }
    qxVm.rename(AudioParam.prototype, "AudioParam");
    qxVm.safeDescriptor_addConstructor(AudioParam);
    qxVm.safe_Objattribute(AudioParam, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

