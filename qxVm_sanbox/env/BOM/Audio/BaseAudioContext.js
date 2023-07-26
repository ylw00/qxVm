BaseAudioContext = function BaseAudioContext(createObj_key) {//构造函数
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(BaseAudioContext);

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
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).audioWorklet;
            if (ele === undefined){
                ele = new AudioWorklet(lwVm.memory.$createObj_key);
                lwVm.memory.private_data.get(this).audioWorklet = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BaseAudioContext', 'audioWorklet', arguments, result);
            return result;
        },
        createAnalyser() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createAnalyser', arguments, result);
            return result;
        },
        createBiquadFilter() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createBiquadFilter', arguments, result);
            return result;
        },
        createBuffer() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createBuffer', arguments, result);
            return result;
        },
        createBufferSource() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createBufferSource', arguments, result);
            return result;
        },
        createChannelMerger() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createChannelMerger', arguments, result);
            return result;
        },
        createChannelSplitter() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createChannelSplitter', arguments, result);
            return result;
        },
        createConstantSource() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createConstantSource', arguments, result);
            return result;
        },
        createConvolver() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createConvolver', arguments, result);
            return result;
        },
        createDelay() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createDelay', arguments, result);
            return result;
        },
        createDynamicsCompressor() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = new DynamicsCompressorNode(lwVm.memory.$createObj_key);
            ele.channelCountMode = "clamped-max";
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createDynamicsCompressor', arguments, result);
            return result;
        },
        createGain() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createGain', arguments, result);
            return result;
        },
        createIIRFilter() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createIIRFilter', arguments, result);
            return result;
        },
        createOscillator() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new OscillatorNode();;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createOscillator', arguments, result);
            return result;
        },
        createPanner() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createPanner', arguments, result);
            return result;
        },
        createPeriodicWave() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createPeriodicWave', arguments, result);
            return result;
        },
        createScriptProcessor() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createScriptProcessor', arguments, result);
            return result;
        },
        createStereoPanner() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createStereoPanner', arguments, result);
            return result;
        },
        createWaveShaper() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'createWaveShaper', arguments, result);
            return result;
        },
        get currentTime() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).currentTime, 0);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BaseAudioContext', 'currentTime', arguments, result);
            return result;
        },
        decodeAudioData() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'BaseAudioContext', 'decodeAudioData', arguments, result);
            return result;
        },
        get destination() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).destination;
            if (ele === undefined){
                ele = new AudioDestinationNode(lwVm.memory.$createObj_key, "explicit");
                lwVm.memory.private_data.get(this).destination = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BaseAudioContext', 'destination', arguments, result);
            return result;
        },
        get listener() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let ele = lwVm.memory.private_data.get(this).listener;
            if (ele === undefined){
                ele = new AudioListener(lwVm.memory.$createObj_key);
                lwVm.memory.private_data.get(this).listener = ele;
            }
            let result = ele;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BaseAudioContext', 'listener', arguments, result);
            return result;
        },
        get onstatechange() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).onstatechange, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BaseAudioContext', 'onstatechange', arguments, result);
            return result;
        },
        set onstatechange(value) {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'BaseAudioContext', 'onstatechange', arguments);
            lwVm.memory.private_data.get(this).onstatechange = value;
        },
        get sampleRate() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).sampleRate;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'BaseAudioContext', 'sampleRate', arguments, result);
            return result;
        },
        get state() {
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return lwVm.abs(lwVm.memory.private_data.get(this).state, "suspended");
        }
    }

    lwVm.rename(BaseAudioContext.prototype, "BaseAudioContext");
    lwVm.safeDescriptor_addConstructor(BaseAudioContext);
    lwVm.safe_Objattribute(BaseAudioContext, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(BaseAudioContext.prototype, EventTarget.prototype);
    Object.setPrototypeOf(BaseAudioContext, EventTarget);
})();

