OfflineAudioContext = function OfflineAudioContext(numberOfChannels, length, sampleRate) {//构造函数
    if(new.target !== OfflineAudioContext){
		throw new TypeError(`Failed to construct 'OfflineAudioContext': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    this.numberOfChannels = numberOfChannels;

    lwVm.memory.private_data.set(this, {
        numberOfChannels:numberOfChannels, 
        length:length, 
        sampleRate:sampleRate,
    })
}; lwVm.safefunction(OfflineAudioContext);

; (function () {
    const $safe_get_attribute = ['length', 'oncomplete'];
    const $safe_set_attribute = ['oncomplete'];
    const $safe_func_attribute = ['resume', 'startRendering', 'suspend'];

    OfflineAudioContext.prototype = {
        get length() {
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.memory.private_data.get(this).length;;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'OfflineAudioContext', 'length', arguments, result);
            return result;
        },
        get oncomplete() {
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).oncomplete, null);;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'OfflineAudioContext', 'oncomplete', arguments, result);
            return result;
        },
        set oncomplete(value) {
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'OfflineAudioContext', 'oncomplete', arguments);
            lwVm.memory.private_data.get(this).oncomplete = value;
        },
        resume() {
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise(function () { debugger; });
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'OfflineAudioContext', 'resume', arguments, result);
            return result;
        },
        startRendering() {
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            const length = this.length;
            const sampleRate = this.sampleRate;
            const numberOfChannels = this.numberOfChannels;
            return new Promise((resolve, reject) => {
                resolve({
                    duration: length / sampleRate,
                    length: length,
                    numberOfChannels: numberOfChannels,
                    sampleRate: this.sampleRate,
                })
            })
        },
        suspend() {
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = new Promise(function () { debugger; });
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'OfflineAudioContext', 'suspend', arguments, result);
            return result;
        },
    }

    lwVm.rename(OfflineAudioContext.prototype, "OfflineAudioContext");
    lwVm.safeDescriptor_addConstructor(OfflineAudioContext);
    lwVm.safe_Objattribute(OfflineAudioContext, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(OfflineAudioContext.prototype, BaseAudioContext.prototype);
    Object.setPrototypeOf(OfflineAudioContext, BaseAudioContext);

})();

