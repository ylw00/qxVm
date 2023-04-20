OfflineAudioContext = function OfflineAudioContext(numberOfChannels, length, sampleRate) {//构造函数
    if(new.target !== OfflineAudioContext){
		throw new TypeError(`Failed to construct 'OfflineAudioContext': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
	}
    this.numberOfChannels = numberOfChannels;

    qxVm.memory.private_data.set(this, {
        numberOfChannels:numberOfChannels, 
        length:length, 
        sampleRate:sampleRate,
    })
}; qxVm.safefunction(OfflineAudioContext);

; (function () {
    const $safe_get_attribute = ['length', 'oncomplete'];
    const $safe_set_attribute = ['oncomplete'];
    const $safe_func_attribute = ['resume', 'startRendering', 'suspend'];

    OfflineAudioContext.prototype = {
        get length() {
            debugger;
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.memory.private_data.get(this).length;
        },
        get oncomplete() {
            debugger;
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return qxVm.abs(qxVm.memory.private_data.get(this).oncomplete, null);
        },
        set oncomplete(value) {
            debugger;
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            qxVm.memory.private_data.get(this).oncomplete = value;
        },
        resume() {
            debugger;
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new Promise(function () { debugger; })
        },
        startRendering() {
            debugger;
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
            debugger;
            if (!OfflineAudioContext.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            return new Promise(function () { debugger; })
        },
    }

    qxVm.rename(OfflineAudioContext.prototype, "OfflineAudioContext");
    qxVm.safeDescriptor_addConstructor(OfflineAudioContext);
    qxVm.safe_Objattribute(OfflineAudioContext, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(OfflineAudioContext.prototype, BaseAudioContext.prototype);
    Object.setPrototypeOf(OfflineAudioContext, BaseAudioContext);

})();

