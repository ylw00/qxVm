OscillatorNode = function OscillatorNode() {
    if(new.target !== OscillatorNode){
		throw new TypeError(`Failed to construct 'OscillatorNode': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(OscillatorNode);

; (function () {
    const $safe_get_attribute = ['detune', 'frequency', 'type'];
    const $safe_set_attribute = ['type'];
    const $safe_func_attribute = ['setPeriodicWave'];

    OscillatorNode.prototype = {
        get detune() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).detune;
            if (ele === undefined) {
                ele = new AudioParam(lwVm.memory.$createObj_key, "a-rate", 0, 153600, -153600);
                lwVm.memory.private_data.get(this).detune = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'OscillatorNode', 'detune', arguments, result);
            return result;
        },
        get frequency() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).detune;
            if (ele === undefined) {
                ele = new AudioParam(lwVm.memory.$createObj_key, "a-rate", 440, 22050, -22050);
                lwVm.memory.private_data.get(this).detune = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'OscillatorNode', 'frequency', arguments, result);
            return result;
        },
        setPeriodicWave() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'OscillatorNode', 'setPeriodicWave', arguments, result);
            return result;
        },
        get type() {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "sine");;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'OscillatorNode', 'type', arguments, result);
            return result;
        },
        set type(value) {
            if (!OscillatorNode.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            lwVm.memory.private_data.get(this).type = value + "";
        }
    }
    lwVm.rename(OscillatorNode.prototype, "OscillatorNode");
    lwVm.safeDescriptor_addConstructor(OscillatorNode);
    lwVm.safe_Objattribute(OscillatorNode, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(OscillatorNode.prototype, AudioScheduledSourceNode.prototype);
    Object.setPrototypeOf(OscillatorNode, AudioScheduledSourceNode);
})();

