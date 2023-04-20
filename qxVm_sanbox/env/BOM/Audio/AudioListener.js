AudioListener = function AudioListener(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(AudioListener);

; (function () {
    const $safe_get_attribute = ['forwardX', 'forwardY', 'forwardZ', 'positionX', 'positionY', 'positionZ', 'upX', 'upY', 'upZ'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['setOrientation', 'setPosition'];

    AudioListener.prototype = {
        get forwardX() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).forwardX;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).forwardX = ele;
            }
            return ele;
        },
        get forwardY() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).forwardY;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).forwardY = ele;
            }
            return ele;
        },
        get forwardZ() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).forwardZ;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", -1, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).forwardZ = ele;
            }
            return ele;
        },
        get positionX() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).positionX;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).positionX = ele;
            }
            return ele;
        },
        get positionY() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).positionY;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).positionY = ele;
            }
            return ele;
        },
        get positionZ() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).positionZ;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).positionZ = ele;
            }
            return ele;
        },
        setOrientation() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        setPosition() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get upX() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).upX;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).upX = ele;
            }
            return ele;
        },
        get upY() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).upY;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 1, 3.4028234663852886e+38, -3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).upY = ele;
            }
            return ele;
        },
        get upZ() {
            debugger;
            if (!AudioListener.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).upZ;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 3.4028234663852886e+38);
                qxVm.memory.private_data.get(this).upZ = ele;
            }
            return ele;
        },
    }
    qxVm.rename(AudioListener.prototype, "AudioListener");
    qxVm.safeDescriptor_addConstructor(AudioListener);
    qxVm.safe_Objattribute(AudioListener, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();

