MediaSession = function MediaSession(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    lwVm.memory.private_data.set(this, {})
}; lwVm.safefunction(MediaSession);

; (function () {
    const $safe_get_attribute = ['metadata', 'playbackState'];
    const $safe_set_attribute = ['metadata', 'playbackState'];
    const $safe_func_attribute = ['setActionHandler', 'setCameraActive', 'setMicrophoneActive', 'setPositionState'];

    MediaSession.prototype = {
        get metadata() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).metadata, null);
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaSession', 'metadata', arguments, result);
            return result;
        },
        set metadata(value) {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaSession', 'metadata', arguments);
            lwVm.memory.private_data.get(this).metadata = value + "";
        },
        get playbackState() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).playbackState, "none");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'MediaSession', 'playbackState', arguments, result);
            return result;
        },
        set playbackState(value) {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Set', 'MediaSession', 'playbackState', arguments);
            lwVm.memory.private_data.get(this).playbackState = value + "";
        },
        setActionHandler() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaSession', 'setActionHandler', arguments, result);
            return result;
        },
        setCameraActive() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaSession', 'setCameraActive', arguments, result);
            return result;
        },
        setMicrophoneActive() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaSession', 'setMicrophoneActive', arguments, result);
            return result;
        },
        setPositionState() {
            if (!MediaSession.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = undefined;
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Func', 'MediaSession', 'setPositionState', arguments, result);
            return result;
        },
    }
    lwVm.rename(MediaSession.prototype, "MediaSession");
    lwVm.safeDescriptor_addConstructor(MediaSession);
    lwVm.safe_Objattribute(MediaSession, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
