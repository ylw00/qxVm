DynamicsCompressorNode = function DynamicsCompressorNode(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(DynamicsCompressorNode);

; (function () {
    const $safe_get_attribute = ['attack', 'knee', 'ratio', 'reduction', 'release', 'threshold'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = [];

    DynamicsCompressorNode.prototype = {
        get attack() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).attack;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "k-rate", 0.003000000026077032, 1, 0);
                qxVm.memory.private_data.get(this).attack = ele;
            }
            return ele;
        },
        get knee() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).knee;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "k-rate", 30, 40, 0);
                qxVm.memory.private_data.get(this).knee = ele;
            }
            return ele;
        },
        get ratio() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).ratio;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "k-rate", 12, 20, 1);
                qxVm.memory.private_data.get(this).ratio = ele;
            }
            return ele;
        },
        get reduction() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return 0;
        },
        get release() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).release;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "k-rate", 0.25, 1, 0);
                qxVm.memory.private_data.get(this).release = ele;
            }
            return ele;
        },
        get threshold() {
            if (!DynamicsCompressorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).threshold;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "k-rate", -24, 0, -100);
                qxVm.memory.private_data.get(this).threshold = ele;
            }
            return ele;
        }
    }
    qxVm.rename(DynamicsCompressorNode.prototype, "DynamicsCompressorNode");
    qxVm.safeDescriptor_addConstructor(DynamicsCompressorNode);
    qxVm.safe_Objattribute(DynamicsCompressorNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(DynamicsCompressorNode.prototype, AudioNode.prototype);
    Object.setPrototypeOf(DynamicsCompressorNode, AudioNode);
})();

