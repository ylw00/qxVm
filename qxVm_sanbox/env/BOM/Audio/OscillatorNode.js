OscillatorNode = function OscillatorNode() {
    if(new.target !== OscillatorNode){
		throw new TypeError(`Failed to construct 'OscillatorNode': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(OscillatorNode);

; (function () {
    const $safe_get_attribute = ['detune', 'frequency', 'type'];
    const $safe_set_attribute = ['type'];
    const $safe_func_attribute = ['setPeriodicWave'];

    OscillatorNode.prototype = {
        get detune() {
            debugger;
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).detune;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 0, 153600, -153600);
                qxVm.memory.private_data.get(this).detune = ele;
            }
            return ele;
        },
        get frequency() {
            debugger;
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).detune;
            if (ele === undefined) {
                ele = new AudioParam(qxVm.memory.$createObj_key, "a-rate", 440, 22050, -22050);
                qxVm.memory.private_data.get(this).detune = ele;
            }
            return ele;
        },
        setPeriodicWave() {
            debugger;
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get type() {
            debugger;
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).type, "sine");
        },
        set type(value) {
            debugger;
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).type = value + "";
        }
    }
    qxVm.rename(OscillatorNode.prototype, "OscillatorNode");
    qxVm.safeDescriptor_addConstructor(OscillatorNode);
    qxVm.safe_Objattribute(OscillatorNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(OscillatorNode.prototype, AudioScheduledSourceNode.prototype);
    Object.setPrototypeOf(OscillatorNode, AudioScheduledSourceNode);
})();

