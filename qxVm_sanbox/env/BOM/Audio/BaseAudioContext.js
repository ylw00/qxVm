BaseAudioContext = function BaseAudioContext(createObj_key) {//构造函数
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(BaseAudioContext);

; (function () {
    const $safe_get_attribute = ['audioWorklet', 'currentTime', 'destination', 'listener', 'onstatechange', 'sampleRate', 'state'];
    const $safe_set_attribute = ['onstatechange'];
    const $safe_func_attribute = [
        'createAnalyser', 'createBiquadFilter', 'createBuffer', 'createBufferSource', 'createChannelMerger', 'createChannelSplitter', 
        'createConstantSource', 'createConvolver', 'createDelay', 'createDynamicsCompressor', 'createGain', 'createIIRFilter', 
        'createOscillator', 'createPanner', 'createPeriodicWave', 'createScriptProcessor', 'createStereoPanner', 'createWaveShaper', 
        'decodeAudioData'
    ];
    
    BaseAudioContext.prototype = {
        get audioWorklet() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).audioWorklet;
            if (ele === undefined){
                ele = new AudioWorklet(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.get(this).audioWorklet = ele;
            }
            return ele;
        },
        createAnalyser() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createBiquadFilter() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createBuffer() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createBufferSource() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createChannelMerger() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createChannelSplitter() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createConstantSource() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createConvolver() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createDelay() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createDynamicsCompressor() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = new DynamicsCompressorNode(qxVm.memory.$createObj_key);
            ele.channelCountMode = "clamped-max";
            return ele;
        },
        createGain() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createIIRFilter() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createOscillator() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new OscillatorNode();
        },
        createPanner() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createPeriodicWave() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createScriptProcessor() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createStereoPanner() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        createWaveShaper() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get currentTime() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).currentTime, 0);
        },
        decodeAudioData() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
        get destination() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).destination;
            if (ele === undefined){
                ele = new AudioDestinationNode(qxVm.memory.$createObj_key, "explicit");
                qxVm.memory.private_data.get(this).destination = ele;
            }
            return ele;
        },
        get listener() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = qxVm.memory.private_data.get(this).listener;
            if (ele === undefined){
                ele = new AudioListener(qxVm.memory.$createObj_key);
                qxVm.memory.private_data.get(this).listener = ele;
            }
            return ele;
        },
        get onstatechange() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).onstatechange, null);
        },
        set onstatechange(value) {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).onstatechange = value;
        },
        get sampleRate() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).sampleRate;
        },
        get state() {
            debugger;
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).state, "suspended");
        }
    }

    qxVm.rename(BaseAudioContext.prototype, "BaseAudioContext");
    qxVm.safeDescriptor_addConstructor(BaseAudioContext);
    qxVm.safe_Objattribute(BaseAudioContext, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(BaseAudioContext.prototype, EventTarget.prototype);
    Object.setPrototypeOf(BaseAudioContext, EventTarget);
})();

